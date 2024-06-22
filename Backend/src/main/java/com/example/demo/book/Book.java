package com.example.demo.book;

import com.example.demo.bookorder.BookOrder;
import com.example.demo.publisher.Publisher;
import jakarta.persistence.*;
import com.example.demo.category.Category;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.JsonBackReference;

import java.util.List;

@Entity
@Table(name = "book")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "book_id")
    private Long bookID;

    @Column(name = "book_name")
    private String bookName;

    @Column(name = "book_price")
    private Double bookPrice;

    @Column(name = "book_quantity")
    private Integer bookAmount;

    @Column(name = "book_author")
    private String bookAuthor;

    @Column(name = "book_star")
    private Integer bookStar;

    @Column(name = "status")
    private Integer status;

    @Column(name = "page")
    private Integer page;

    @Column(name = "language")
    private String language;

    @Column(name = "book_image")
    private String bookImage;

    @ManyToOne
    @JoinColumn(name = "category_id")
    @JsonBackReference("category-book")
    private Category category;

    @ManyToOne
    @JoinColumn(name = "publisher_id")
    @JsonBackReference("publisher-book")
    private Publisher publisher;

    @OneToMany(mappedBy = "book", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonManagedReference("book-order")
    private List<BookOrder> bookOrders;
}
