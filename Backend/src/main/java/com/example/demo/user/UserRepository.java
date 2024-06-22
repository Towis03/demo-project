package com.example.demo.user;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUserMail(String userMail);
    Optional<User> findById(Long id); // Sử dụng phương thức mặc định của JPA
}
