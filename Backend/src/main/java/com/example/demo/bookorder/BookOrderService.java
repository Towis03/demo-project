package com.example.demo.bookorder;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class BookOrderService {

    @Autowired
    private BookOrderRepository bookOrderRepository;

    public List<BookOrder> getOrdersByOrderID(Long orderID) {
        return bookOrderRepository.findByOrderDetailID(orderID);
    }

    public List<BookOrder> getOrdersBySearchID(String searchID) {
        return bookOrderRepository.findBySearchID(searchID);
    }

    public List<BookOrder> createBookOrders(List<BookOrder> bookOrders) {
        return bookOrderRepository.saveAll(bookOrders);
    }

    public BookOrder updateReturnDate(Long orderID, LocalDateTime returnDate) {
        Optional<BookOrder> bookOrder = bookOrderRepository.findById(orderID);
        if (bookOrder.isPresent()) {
            BookOrder order = bookOrder.get();
            order.setReturnDate(returnDate);
            order.setStatus("Returned");
            return bookOrderRepository.save(order);
        }
        return null;
    }

    public BookOrder updateOrder(Long orderID, String status, LocalDateTime returnDate) {
        Optional<BookOrder> bookOrder = bookOrderRepository.findById(orderID);
        if (bookOrder.isPresent()) {
            BookOrder order = bookOrder.get();
            order.setStatus(status);
            order.setReturnDate(returnDate);
            return bookOrderRepository.save(order);
        }
        return null;
    }

}
