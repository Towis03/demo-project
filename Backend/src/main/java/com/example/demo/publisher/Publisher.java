package com.example.demo.publisher;

import jakarta.persistence.*;
import com.example.demo.book.Book;
import java.util.List;
import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@Table(name = "publisher")
public class Publisher {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "publisher_id")
    private Long publisherID;

    @Column(name = "publisher_name")
    private String publisherName;

    @OneToMany(mappedBy = "publisher")
    @JsonManagedReference("publisher-book")
    private List<Book> books;

    // Getters and setters
    public Long getPublisherID() {
        return publisherID;
    }

    public void setPublisherID(Long publisherID) {
        this.publisherID = publisherID;
    }

    public String getPublisherName() {
        return publisherName;
    }

    public void setPublisherName(String publisherName) {
        this.publisherName = publisherName;
    }

    public List<Book> getBooks() {
        return books;
    }

    public void setBooks(List<Book> books) {
        this.books = books;
    }
}
