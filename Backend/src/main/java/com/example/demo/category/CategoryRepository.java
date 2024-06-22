package com.example.demo.category;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.demo.category.Category;

public interface CategoryRepository extends JpaRepository<Category, Long> {
}
