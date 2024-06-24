import React, { useState, useEffect } from "react";
import "./Pages.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Icon } from "@mui/material";
import { Link } from "react-router-dom";
const SlideShow = ({ books }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [categoryName, setCategoryName] = useState("");

  useEffect(() => {
    if (books.length > 0) {
      setCategoryName(books[0].categoryName);
    }
  }, [books]);

  const nextSlide = () => {
    if (currentIndex < books.length - 5) {
      setCurrentIndex(currentIndex + 5);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 5);
    }
  };

  return (
    <div className="slideshow-container">
      <div className="header">
        <a href="#">{categoryName}</a>
      </div>
      <div className="slider">
        <button
          className={`prev ${currentIndex === 0 ? "disabled" : ""}`}
          onClick={prevSlide}
          disabled={currentIndex === 0}
        >
          <ArrowBackIosIcon />
        </button>
        <div className="book-display">
          {books.slice(currentIndex, currentIndex + 5).map((book, index) => (
            <Link
              key={book.bookID}
              className="book"
              to={`/BookDetail/${book.bookID}`}
            >
              <img src={book.bookImage} alt={book.bookName} />
              <button>{book.bookAmount}</button>
            </Link>
          ))}
        </div>
        <button
          className={`next ${
            currentIndex >= books.length - 5 ? "disabled" : ""
          }`}
          onClick={nextSlide}
          disabled={currentIndex >= books.length - 5}
        >
          <ArrowForwardIosIcon />
        </button>
      </div>
    </div>
  );
};

export default SlideShow;
