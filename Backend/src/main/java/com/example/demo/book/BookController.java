package com.example.demo.book;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api")
public class BookController {

    @Autowired
    private BookService bookService;

    @GetMapping("/books")
    public List<BookDTO> getAllBooks() {
        List<Book> books = bookService.getAllBooks();
        return books.stream().map(book -> {
            BookDTO bookDTO = new BookDTO();
            bookDTO.setBookID(book.getBookID());
            bookDTO.setBookName(book.getBookName());
            bookDTO.setBookPrice(book.getBookPrice());
            bookDTO.setBookAmount(book.getBookAmount());
            bookDTO.setBookAuthor(book.getBookAuthor());
            bookDTO.setBookStar(book.getBookStar());
            bookDTO.setStatus(book.getStatus());
            bookDTO.setPage(book.getPage());
            bookDTO.setLanguage(book.getLanguage());
            bookDTO.setBookImage(book.getBookImage());
            bookDTO.setCategoryName(book.getCategory() != null ? book.getCategory().getCategoryName() : "No Category");
            bookDTO.setPublisherName(book.getPublisher() != null ? book.getPublisher().getPublisherName() : "No Publisher");
            return bookDTO;
        }).collect(Collectors.toList());
    }
}
