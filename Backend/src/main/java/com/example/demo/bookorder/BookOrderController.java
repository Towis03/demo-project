package com.example.demo.bookorder;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import com.example.demo.user.UserService;
import com.example.demo.user.User;
import java.security.SecureRandom;
import java.time.LocalDateTime;
import java.util.*;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/orders")
public class BookOrderController {
    private static final Logger logger = LoggerFactory.getLogger(BookOrderController.class);

    @Autowired
    private BookOrderService bookOrderService;

    @Autowired
    private UserService userService;

    @GetMapping("/{orderID}")
    public ResponseEntity<List<BookOrder>> getOrdersByOrderID(@PathVariable Long orderID) {
        System.out.println(orderID);
        List<BookOrder> orders = bookOrderService.getOrdersByOrderID(orderID);
        System.out.println(orders);
        if (orders.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(orders);
    }

    @GetMapping("/search/{searchID}")
    @PreAuthorize("hasRole('STAFF')")
    public ResponseEntity<List<BookOrderDTO>> getOrdersBySearchID(@PathVariable String searchID) {
        logger.info("Received search request for search ID: {}", searchID);
        try {
            List<BookOrder> orders = bookOrderService.getOrdersBySearchID(searchID);
            List<BookOrderDTO> dtoList = orders.stream().map(order -> new BookOrderDTO(
                    order.getOrderDetailID(),
                    order.getBook().getBookID(),
                    order.getBook().getBookName(),
                    order.getBook().getBookImage(), // Ánh xạ trường ảnh sách
                    order.getTotalPrice(),
                    order.getQuantity(),
                    order.getOrderDate(),
                    order.getReturnDate(),
                    order.getStatus(),
                    (order.getUser() != null) ? order.getUser().getUserName() : null,
                    (order.getUser() != null) ? order.getUser().getUserMail() : null
            )).collect(Collectors.toList());

            if (dtoList.isEmpty()) {
                logger.warn("No orders found for search ID: {}", searchID);
                return ResponseEntity.notFound().build();
            }
            logger.info("Returning orders: {}", dtoList);
            return ResponseEntity.ok(dtoList);
        } catch (Exception e) {
            logger.error("Error while processing search request for search ID: {}", searchID, e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }


    private static final int LENGTH = 6;
    private static final SecureRandom RANDOM = new SecureRandom();

    public static String generateUniqueNumber() {
        Set<Integer> numbers = new HashSet<>();
        while (numbers.size() < LENGTH) {
            numbers.add(RANDOM.nextInt(10));
        }
        StringBuilder sb = new StringBuilder(LENGTH);
        for (Integer number : numbers) {
            sb.append(number);
        }
        return sb.toString();
    }

    @PostMapping

    public ResponseEntity<Map<String, Object>> createBookOrders(@RequestBody List<BookOrder> bookOrders) {
        String searchID = generateUniqueNumber(); // Sử dụng mã ngẫu nhiên ngắn hơn
        for (BookOrder order : bookOrders) {
            if (order.getUserID() != null) {
                User user = userService.findById(order.getUserID()); // Tìm User theo ID chỉ khi UserID không phải là null
                if (user == null) {
                    return ResponseEntity.badRequest().body(Map.of("error", "User not found for the given userID"));
                }
                order.setUser(user); // Thiết lập đối tượng User
            } else {
                // Xử lý khi không có User: bạn có thể bỏ qua, hoặc thông báo lỗi
                return ResponseEntity.badRequest().body(Map.of("error", "User information is missing for order"));
            }
            order.setSearchID(searchID);
            System.out.println(order); // In thông tin nhận được để debug
        }
        List<BookOrder> createdOrders = bookOrderService.createBookOrders(bookOrders);
        Map<String, Object> response = new HashMap<>();
        response.put("orderID", createdOrders.get(0).getOrderDetailID());
        response.put("searchID", searchID);
        return ResponseEntity.ok(response);
    }



    @PutMapping("/{orderID}/return")
    @PreAuthorize("hasRole('STAFF')")
    public ResponseEntity<BookOrder> updateReturnDate(@PathVariable Long orderID, @RequestBody Map<String, Object> payload) {
        try {
            String status = (String) payload.get("status");
            LocalDateTime returnDate = LocalDateTime.parse((String) payload.get("returnDate"));
            BookOrder updatedOrder = bookOrderService.updateOrder(orderID, status, returnDate);
            if (updatedOrder == null) {
                return ResponseEntity.notFound().build();
            }
            return ResponseEntity.ok(updatedOrder);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(null);
        }
    }

}
