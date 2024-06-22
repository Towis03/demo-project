package com.example.demo.bookorder;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface BookOrderRepository extends JpaRepository<BookOrder, Long> {
    List<BookOrder> findByOrderDetailID(Long orderDetailID);
    List<BookOrder> findBySearchID(String searchID);
}
