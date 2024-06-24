import { useNavigate } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import "react-owl-carousel2/lib/styles.css";
import "react-owl-carousel2/src/owl.carousel.css";
import SlideShow from "./SlideShow";
import { UserContext } from "../../src/ultils/userContext";
import axios from "axios";
function Main_page() {
  const { user, handleLogout } = useContext(UserContext);
  const navigate = useNavigate();
  console.log("userDetail", user);
  const handleWishListClick = () => {
    navigate("/wishlist");
  };
  const handleManageBorowClick = () => {
    navigate("/manageborrow");
  };
  const handleManageStaffClick = () => {
    navigate("/managestaff");
  };
  const handleManageCustomerClick = () => {
    navigate("/managecustomer");
  };

  const handleLoginClick = () => {
    navigate("/signin");
  };

  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get("http://localhost:9191/api/books");
        setBooks(response.data);
        console.log("book api: ", response.data);
      } catch (error) {
        console.error("Fetch books failed:", error);
      }
    };
    fetchBooks();
  }, []);

  const handleHomeUserClick = () => {
    navigate("/");
  };

  const scienceBooks = books.filter((book) => book.categoryName === "Khoa học");
  const businessBooks = books.filter(
    (book) => book.categoryName === "Kinh doanh"
  );
  const discoveryBooks = books.filter(
    (book) => book.categoryName === "Khám phá"
  );
  const historyBooks = books.filter((book) => book.categoryName === "Lịch sử");
  const growYourSelftBooks = books.filter(
    (book) => book.categoryName === "Phát triển bản thân"
  );
  const healthBooks = books.filter((book) => book.categoryName === "Sức khỏe");
  const novelBooks = books.filter(
    (book) => book.categoryName === "Tiểu thuyết"
  );
  const comicBooks = books.filter(
    (book) => book.categoryName === "Truyện tranh"
  );
  console.log("scienceBooks", scienceBooks);
  return (
    <>
      <div>
        {/* Nav bar */}
        <div className="fixednavbar header-area">
          <div className="container">
            <div className="row upper-nav">
              <div className=" text-left nav-logo">
                <a className="navbar-brand" onClick={handleHomeUserClick}>
                  <img
                    src="https://th.bing.com/th/id/OIP.NnDnfxfuDA8i1Nfl8M8RfgHaHa?w=3333&h=3333&rs=1&pid=ImgDetMain"
                    alt="img"
                  />
                </a>
              </div>
              <div className="ml-auto nav-mega d-flex justify-content-end align-items-center">
                <header className="site-header" id="header">
                  <nav className="navbar navbar-expand-md  static-nav">
                    <div className="container position-relative megamenu-custom">
                      <a
                        className="navbar-brand center-brand"
                        href="index-book-shop.html"
                      >
                        <img
                          src="book-shop\img\logo.png"
                          alt="logo"
                          className="logo-scrolled"
                        />
                      </a>

                      <div className="collapse navbar-collapse">
                        <ul className="navbar-nav ml-auto">
                          <li className="nav-item">
                            <a className="nav-link" href="index-book-shop.html">
                              HOME
                            </a>
                          </li>
                          <li className="nav-item dropdown static">
                            <a
                              className="nav-link dropdown-toggle active"
                              href="#"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              {" "}
                              BOOKS{" "}
                            </a>
                            <ul className="dropdown-menu megamenu flexable-megamenu">
                              <li>
                                <div className="container">
                                  <div className="row">
                                    <div className="col-lg-3 col-md-6 col-sm-12 mengmenu_border">
                                      <h5 className="dropdown-title">
                                        {" "}
                                        Most Wanted{" "}
                                      </h5>
                                      <ul>
                                        <li>
                                          <i className="lni-angle-double-right right-arrow"></i>
                                          <a
                                            className="dropdown-item"
                                            href="book-shop\product-listing.html"
                                          >
                                            Love Does
                                          </a>
                                        </li>
                                        <li>
                                          <i className="lni-angle-double-right right-arrow"></i>
                                          <a
                                            className="dropdown-item"
                                            href="book-shop\product-listing.html"
                                          >
                                            No One Belongs
                                          </a>
                                        </li>
                                        <li>
                                          <i className="lni-angle-double-right right-arrow"></i>
                                          <a
                                            className="dropdown-item"
                                            href="book-shop\product-listing.html"
                                          >
                                            As I Lay Dying
                                          </a>
                                        </li>
                                        <li>
                                          <i className="lni-angle-double-right right-arrow"></i>
                                          <a
                                            className="dropdown-item"
                                            href="book-shop\product-listing.html"
                                          >
                                            Life is Elsewhere
                                          </a>
                                        </li>
                                        <li>
                                          <i className="lni-angle-double-right right-arrow"></i>
                                          <a
                                            className="dropdown-item"
                                            href="book-shop\product-listing.html"
                                          >
                                            The Road
                                          </a>
                                        </li>
                                        <li>
                                          <i className="lni-angle-double-right right-arrow"></i>
                                          <a
                                            className="dropdown-item"
                                            href="book-shop\product-listing.html"
                                          >
                                            Why Me?
                                          </a>
                                        </li>
                                      </ul>
                                      <h5 className="dropdown-title">
                                        {" "}
                                        Classic{" "}
                                      </h5>
                                      <ul>
                                        <li>
                                          <i className="lni-angle-double-right right-arrow"></i>
                                          <a
                                            className="dropdown-item"
                                            href="book-shop\product-listing.html"
                                          >
                                            Lorna Doone
                                          </a>
                                        </li>
                                        <li>
                                          <i className="lni-angle-double-right right-arrow"></i>
                                          <a
                                            className="dropdown-item"
                                            href="book-shop\product-listing.html"
                                          >
                                            Lord of Flies
                                          </a>
                                        </li>
                                        <li>
                                          <i className="lni-angle-double-right right-arrow"></i>
                                          <a
                                            className="dropdown-item"
                                            href="book-shop\product-listing.html"
                                          >
                                            Kidnapped
                                          </a>
                                        </li>
                                        <li>
                                          <i className="lni-angle-double-right right-arrow"></i>
                                          <a
                                            className="dropdown-item"
                                            href="book-shop\product-listing.html"
                                          >
                                            End World
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-12 mengmenu_border">
                                      <h5 className="dropdown-title">
                                        {" "}
                                        NOVEL's{" "}
                                      </h5>
                                      <ul>
                                        <li>
                                          <i className="lni-angle-double-right right-arrow"></i>
                                          <a
                                            className="dropdown-item"
                                            href="book-shop\product-listing.html"
                                          >
                                            Romance
                                          </a>
                                        </li>
                                        <li>
                                          <i className="lni-angle-double-right right-arrow"></i>
                                          <a
                                            className="dropdown-item"
                                            href="book-shop\product-listing.html"
                                          >
                                            Fantasy
                                          </a>
                                        </li>
                                        <li>
                                          <i className="lni-angle-double-right right-arrow"></i>
                                          <a
                                            className="dropdown-item"
                                            href="book-shop\product-listing.html"
                                          >
                                            Thrillers
                                          </a>
                                        </li>
                                        <li>
                                          <i className="lni-angle-double-right right-arrow"></i>
                                          <a
                                            className="dropdown-item"
                                            href="book-shop\product-listing.html"
                                          >
                                            Science Fiction
                                          </a>
                                        </li>
                                        <li>
                                          <i className="lni-angle-double-right right-arrow"></i>
                                          <a
                                            className="dropdown-item"
                                            href="book-shop\product-listing.html"
                                          >
                                            Historical Fiction
                                          </a>
                                        </li>
                                        <li>
                                          <i className="lni-angle-double-right right-arrow"></i>
                                          <a
                                            className="dropdown-item"
                                            href="book-shop\product-listing.html"
                                          >
                                            Others
                                          </a>
                                        </li>
                                      </ul>

                                      <h5 className="dropdown-title">
                                        {" "}
                                        HISTORY{" "}
                                      </h5>
                                      <ul>
                                        <li>
                                          <i className="lni-angle-double-right right-arrow"></i>
                                          <a
                                            className="dropdown-item"
                                            href="book-shop\product-listing.html"
                                          >
                                            Creative Thinking
                                          </a>
                                        </li>
                                        <li>
                                          <i className="lni-angle-double-right right-arrow"></i>
                                          <a
                                            className="dropdown-item"
                                            href="book-shop\product-listing.html"
                                          >
                                            Historical Fiction
                                          </a>
                                        </li>
                                        <li>
                                          <i className="lni-angle-double-right right-arrow"></i>
                                          <a
                                            className="dropdown-item"
                                            href="book-shop\product-listing.html"
                                          >
                                            Creative Thinking
                                          </a>
                                        </li>
                                        <li>
                                          <i className="lni-angle-double-right right-arrow"></i>
                                          <a
                                            className="dropdown-item"
                                            href="book-shop\product-listing.html"
                                          >
                                            Personal Finance
                                          </a>
                                        </li>
                                      </ul>
                                    </div>

                                    <div className="col-lg-6 col-md-12 col-sm-12">
                                      <h5 className="dropdown-title text-left">
                                        Featured Items{" "}
                                      </h5>
                                      <div className="carousel-menu mt-4">
                                        <div className="featured-megamenu-carousel owl-carousel owl-theme">
                                          <div className="item ">
                                            <img
                                              src="book-shop\img\shop1.jpg"
                                              alt="shop-image"
                                            />
                                          </div>
                                          <div className="item">
                                            <img
                                              src="book-shop\img\shop2.jpg"
                                              alt="shop-image"
                                            />
                                          </div>
                                        </div>
                                        <i className="lni-chevron-left ini-customPrevBtn"></i>
                                        <i className="lni-chevron-right ini-customNextBtn"></i>
                                      </div>
                                      <p className="mt-4 megamenu-slider-para">
                                        Lorem Ipsum is simply dummy text of the
                                        printing and typesetting industry. Lorem
                                        Ipsum has been the industry's standard
                                        dummy text
                                      </p>
                                      <a
                                        href="book-shop\product-listing.html"
                                        className="btn black-border-color-yellow-gradient-btn slider-btn text-left"
                                      >
                                        Buy Now
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </li>
                          {/* <li className="nav-item dropdown static">
                            <a
                              className="nav-link dropdown-toggle"
                              href="#"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              {" "}
                              E-BOOKS{" "}
                            </a>
                            <ul className="dropdown-menu megamenu flexable-megamenu">
                              <li>
                                <div className="container">
                                  <div className="row">
                                    <div className="col-lg-3 col-md-6 col-sm-12 mengmenu_border">
                                      <h5 className="dropdown-title bottom10">
                                        {" "}
                                        Categories{" "}
                                      </h5>

                                      <ul>
                                        <li>
                                          <i className="lni-angle-double-right right-arrow"></i>
                                          <a
                                            className="dropdown-item"
                                            href="book-shop\product-listing.html"
                                          >
                                            Art
                                          </a>
                                        </li>
                                        <li>
                                          <i className="lni-angle-double-right right-arrow"></i>
                                          <a
                                            className="dropdown-item"
                                            href="book-shop\product-listing.html"
                                          >
                                            Autobiography
                                          </a>
                                        </li>
                                        <li>
                                          <i className="lni-angle-double-right right-arrow"></i>
                                          <a
                                            className="dropdown-item"
                                            href="book-shop\product-listing.html"
                                          >
                                            Biography
                                          </a>
                                        </li>
                                        <li>
                                          <i className="lni-angle-double-right right-arrow"></i>
                                          <a
                                            className="dropdown-item"
                                            href="book-shop\product-listing.html"
                                          >
                                            Chick lit
                                          </a>
                                        </li>
                                        <li>
                                          <i className="lni-angle-double-right right-arrow"></i>
                                          <a
                                            className="dropdown-item"
                                            href="book-shop\product-listing.html"
                                          >
                                            Anthology
                                          </a>
                                        </li>
                                        <li>
                                          <i className="lni-angle-double-right right-arrow"></i>
                                          <a
                                            className="dropdown-item"
                                            href="book-shop\product-listing.html"
                                          >
                                            Coming-of-age
                                          </a>
                                        </li>
                                        <li>
                                          <i className="lni-angle-double-right right-arrow"></i>
                                          <a
                                            className="dropdown-item"
                                            href="book-shop\product-listing.html"
                                          >
                                            Drama
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-12 mengmenu_border">
                                      <h5 className="dropdown-title opacity-10">
                                        {" "}
                                        Others{" "}
                                      </h5>
                                      <ul>
                                        <li>
                                          <i className="lni-angle-double-right right-arrow"></i>
                                          <a
                                            className="dropdown-item"
                                            href="book-shop\product-listing.html"
                                          >
                                            Crime
                                          </a>
                                        </li>
                                        <li>
                                          <i className="lni-angle-double-right right-arrow"></i>{" "}
                                          <a
                                            className="dropdown-item"
                                            href="book-shop\product-listing.html"
                                          >
                                            Dictionary
                                          </a>
                                        </li>
                                        <li>
                                          <i className="lni-angle-double-right right-arrow"></i>{" "}
                                          <a
                                            className="dropdown-item"
                                            href="book-shop\product-listing.html"
                                          >
                                            Health
                                          </a>
                                        </li>
                                        <li>
                                          <i className="lni-angle-double-right right-arrow"></i>
                                          <a
                                            className="dropdown-item"
                                            href="book-shop\product-listing.html"
                                          >
                                            History
                                          </a>
                                        </li>
                                        <li>
                                          <i className="lni-angle-double-right right-arrow"></i>
                                          <a
                                            className="dropdown-item"
                                            href="book-shop\product-listing.html"
                                          >
                                            Journal
                                          </a>
                                        </li>
                                        <li>
                                          <i className="lni-angle-double-right right-arrow"></i>
                                          <a
                                            className="dropdown-item"
                                            href="book-shop\product-listing.html"
                                          >
                                            Horror
                                          </a>
                                        </li>
                                        <li>
                                          <i className="lni-angle-double-right right-arrow"></i>
                                          <a
                                            className="dropdown-item"
                                            href="book-shop\product-listing.html"
                                          >
                                            Poetry
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-12 mengmenu_border">
                                      <h5 className="dropdown-title bottom10">
                                        {" "}
                                        Author's{" "}
                                      </h5>

                                      <div className="media outlet-media mt-3">
                                        <div className="box">
                                          <img
                                            className="align-self-start"
                                            src="book-shop\img\author1.jpg"
                                            alt="Generic placeholder image"
                                          />
                                        </div>
                                        <div className="media-body">
                                          <h6 className="mt-3 ml-3">
                                            <a href="#">Eva Smith</a>
                                          </h6>
                                        </div>
                                      </div>

                                      <div className="media outlet-media">
                                        <div className="box">
                                          <img
                                            className="align-self-start"
                                            src="book-shop\img\author2.jpg"
                                            alt="Generic placeholder image"
                                          />
                                        </div>
                                        <div className="media-body">
                                          <h6 className="mt-3 ml-3">
                                            <a href="#">Rosa Parks</a>
                                          </h6>
                                        </div>
                                      </div>

                                      <div className="media outlet-media">
                                        <div className="box">
                                          <img
                                            className="align-self-start"
                                            src="book-shop\img\author3.jpg"
                                            alt="Generic placeholder image"
                                          />
                                        </div>
                                        <div className="media-body">
                                          <h6 className="mt-3 ml-3">
                                            <a href="#">Alan Yang</a>
                                          </h6>
                                        </div>
                                      </div>

                                      <div className="media outlet-media">
                                        <div className="box">
                                          <img
                                            className="align-self-start"
                                            src="book-shop\img\author4.jpg"
                                            alt="Generic placeholder image"
                                          />
                                        </div>
                                        <div className="media-body">
                                          <h6 className="mt-3 ml-3">
                                            <a href="#">Kam John</a>
                                          </h6>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-12 pt-3">
                                      <a href="#;">
                                        <img
                                          src="book-shop\img\featured-product.jpg"
                                          alt="image"
                                        />
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </li> */}
                          <li className="nav-item dropdown position-relative">
                            <a
                              className="nav-link dropdown-toggle"
                              href="#"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              PAGES
                            </a>
                            <div className="dropdown-menu">
                              <ul>
                                <li>
                                  <i className="lni-angle-double-right right-arrow"></i>
                                  <a
                                    className="dropdown-item"
                                    href="book-shop\product-listing.html"
                                  >
                                    Listing One
                                  </a>
                                </li>
                                <li>
                                  <i className="lni-angle-double-right right-arrow"></i>
                                  <a
                                    className="dropdown-item"
                                    href="book-shop\product-detail.html"
                                  >
                                    Detail Page
                                  </a>
                                </li>
                                <li>
                                  <i className="lni-angle-double-right right-arrow"></i>
                                  <a
                                    className="dropdown-item"
                                    href="book-shop/shop-cart.html.html"
                                  >
                                    ShopCart Page
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              href="book-shop\contact.html"
                            >
                              CONTACT
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </nav>

                  <div className="side-menu opacity-0 gradient-bg hidden">
                    <div className="inner-wrapper">
                      <span
                        className="btn-close btn-close-no-padding"
                        id="btn_sideNavClose"
                      >
                        <i></i>
                        <i></i>
                      </span>
                      <nav className="side-nav w-100">
                        <ul className="navbar-nav">
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              href="book-shop\product-listing.html"
                            >
                              {" "}
                              HOME
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link collapsePagesSideMenu"
                              data-toggle="collapse"
                              href="#sideNavPages1"
                            >
                              BOOKS <i className="fas fa-chevron-down"></i>
                            </a>
                            <div
                              id="sideNavPages1"
                              className="collapse sideNavPages"
                            >
                              <ul className="navbar-nav mt-2">
                                <li className="nav-item">
                                  <a
                                    className="nav-link"
                                    href="book-shop\product-listing.html"
                                  >
                                    Love Does
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    className="nav-link"
                                    href="book-shop\product-listing.html"
                                  >
                                    No One Belongs
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    className="nav-link"
                                    href="book-shop\product-listing.html"
                                  >
                                    As I Lay Dying
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    className="nav-link"
                                    href="book-shop\product-listing.html"
                                  >
                                    Life is Elsewhere
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    className="nav-link"
                                    href="book-shop\product-listing.html"
                                  >
                                    The Road
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    className="nav-link"
                                    href="book-shop\product-listing.html"
                                  >
                                    Why Me?
                                  </a>
                                </li>
                              </ul>
                              <h5 className="sub-title">1. Classic</h5>
                              <ul className="navbar-nav mt-2">
                                <li className="nav-item">
                                  <a
                                    className="nav-link"
                                    href="book-shop\product-listing.html"
                                  >
                                    Lorna Doone
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    className="nav-link"
                                    href="book-shop\product-listing.html"
                                  >
                                    Lord of Flies
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    className="nav-link"
                                    href="book-shop\product-listing.html"
                                  >
                                    Kidnapped
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    className="nav-link"
                                    href="book-shop\product-listing.html"
                                  >
                                    End World
                                  </a>
                                </li>
                              </ul>

                              <h5 className="sub-title">2. Novel's</h5>
                              <ul className="navbar-nav mt-2">
                                <li className="nav-item">
                                  <a
                                    className="nav-link"
                                    href="book-shop\product-listing.html"
                                  >
                                    Romance
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    className="nav-link"
                                    href="book-shop\product-listing.html"
                                  >
                                    Fantasy
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    className="nav-link"
                                    href="book-shop\product-listing.html"
                                  >
                                    Thrillers
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    className="nav-link"
                                    href="book-shop\product-listing.html"
                                  >
                                    Historical Fiction
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    className="nav-link"
                                    href="book-shop\product-listing.html"
                                  >
                                    Others
                                  </a>
                                </li>
                              </ul>

                              <h5 className="sub-title">3. History</h5>
                              <ul className="navbar-nav mt-2">
                                <li className="nav-item">
                                  <a
                                    className="nav-link"
                                    href="book-shop\product-listing.html"
                                  >
                                    Creative Thinking
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    className="nav-link"
                                    href="book-shop\product-listing.html"
                                  >
                                    Historical Fiction
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    className="nav-link"
                                    href="book-shop\product-listing.html"
                                  >
                                    Creative Thinking
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    className="nav-link"
                                    href="book-shop\product-listing.html"
                                  >
                                    Personal Finance
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link collapsePagesSideMenu"
                              data-toggle="collapse"
                              href="#sideNavPages3"
                            >
                              E-BOOKS <i className="fas fa-chevron-down"></i>
                            </a>
                            <div
                              id="sideNavPages3"
                              className="collapse sideNavPages"
                            >
                              <ul className="navbar-nav mt-2">
                                <li className="nav-item">
                                  <a
                                    className="nav-link"
                                    href="book-shop\product-listing.html"
                                  >
                                    Art
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    className="nav-link"
                                    href="book-shop\product-listing.html"
                                  >
                                    Autobiography
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    className="nav-link"
                                    href="book-shop\product-listing.html"
                                  >
                                    Biography
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    className="nav-link"
                                    href="book-shop\product-listing.html"
                                  >
                                    Chick lit
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    className="nav-link"
                                    href="book-shop\product-listing.html"
                                  >
                                    Coming-of-age
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    className="nav-link"
                                    href="book-shop\product-listing.html"
                                  >
                                    Anthology
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    className="nav-link"
                                    href="book-shop\product-listing.html"
                                  >
                                    Drama
                                  </a>
                                </li>
                              </ul>
                              <h5 className="sub-title">1. Others</h5>
                              <ul className="navbar-nav mt-2">
                                <li className="nav-item">
                                  <a
                                    className="nav-link"
                                    href="book-shop\product-listing.html"
                                  >
                                    Crime
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    className="nav-link"
                                    href="book-shop\product-listing.html"
                                  >
                                    {" "}
                                    Dictionary
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    className="nav-link"
                                    href="book-shop\product-listing.html"
                                  >
                                    {" "}
                                    Health
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    className="nav-link"
                                    href="book-shop\product-listing.html"
                                  >
                                    History
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    className="nav-link"
                                    href="book-shop\product-listing.html"
                                  >
                                    Horror
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    className="nav-link"
                                    href="book-shop\product-listing.html"
                                  >
                                    Poetry
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link collapsePagesSideMenu"
                              data-toggle="collapse"
                              href="#sideNavPages2"
                            >
                              PAGES <i className="fas fa-chevron-down"></i>
                            </a>
                            <div
                              id="sideNavPages2"
                              className="collapse sideNavPages"
                            >
                              <ul className="navbar-nav">
                                <li className="nav-item">
                                  <a
                                    className="nav-link"
                                    href="book-shop\product-listing.html"
                                  >
                                    Listing One
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    className="nav-link"
                                    href="book-shop\product-detail.html"
                                  >
                                    Detail Page
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    className="nav-link"
                                    href="book-shop\shop-cart.html"
                                  >
                                    ShopCart Page
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              href="book-shop\contact.html"
                            >
                              Contact
                            </a>
                          </li>
                        </ul>
                      </nav>
                      <div className="side-footer w-100">
                        <ul className="social-icons-simple white top40">
                          <li>
                            <a className="facebook-bg-hvr" href="#">
                              <i className="fab fa-facebook-f"></i>{" "}
                            </a>{" "}
                          </li>
                          <li>
                            <a className="twitter-bg-hvr" href="#">
                              <i className="fab fa-twitter"></i>{" "}
                            </a>{" "}
                          </li>
                          <li>
                            <a className="instagram-bg-hvr" href="#">
                              <i className="fab fa-instagram"></i>{" "}
                            </a>{" "}
                          </li>
                        </ul>
                        <p className="whitecolor">
                          &copy; <span id="year"></span> Product Shop. Made With
                          Love by ThemesIndustry
                        </p>
                      </div>
                    </div>
                  </div>
                  <div id="close_side_menu" className="tooltip"></div>
                </header>
                <div className="nav-utility">
                  <div className="manage-icons d-inline-block">
                    <ul className="d-flex justify-content-center align-items-center">
                      <li className="d-inline-block">
                        <a id="add_search_box">
                          <i className="lni lni-search search-sidebar-hover"></i>
                        </a>
                      </li>
                      <li className="d-inline-block mini-menu-card">
                        <a className="nav-link" id="add_cart_box" href="#">
                          <i className="lni lni-shopping-basket"></i>
                        </a>
                      </li>
                      <a
                        href=""
                        className="d-inline-block sidemenu_btn d-block"
                        id="sidemenu_toggle"
                        onClick={handleWishListClick}
                      >
                        <i className="lni lni-menu"></i>
                      </a>

                      <div>
                        {user ? (
                          <div className="dropdown">
                            <button className="dropbtn">
                              {user.user.userName}
                            </button>
                            <div className="dropdown-content">
                              <a href="#">Cài blabla</a>
                              {user.user.role == "ADMIN" ? (
                                <>
                                  <a
                                    href=""
                                    onClick={handleManageCustomerClick}
                                  >
                                    Manage Customer
                                  </a>
                                  <a href="" onClick={handleManageStaffClick}>
                                    Manage Staff
                                  </a>
                                </>
                              ) : (
                                <p></p>
                              )}

                              {user.user.role == "STAFF" ? (
                                <>
                                  <a href="" onClick={handleManageBorowClick}>
                                    Manage Borrow
                                  </a>
                                </>
                              ) : (
                                <p></p>
                              )}

                              <a href="/" onClick={handleLogout}>
                                Log out
                              </a>
                            </div>
                          </div>
                        ) : (
                          <button onClick={handleLoginClick}>Sign In</button>
                        )}
                      </div>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ảnh to */}
        <div className="homer-banner">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center text-center text-lg-left">
                <div className="banner-description">
                  <span className="small-heading animated fadeInRight delay-1s">
                    WELCOME
                  </span>
                  <h1 className="w-sm-100 w-md-100 w-lg-25 animated fadeInLeft delay-1s">
                    BOOKS <span>LIBRARY</span>
                  </h1>
                  <a
                    href="book-shop\product-listing.html"
                    className="btn animated fadeInLeft delay-1s"
                  >
                    EXPLORE NOW{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* //Body */}
        {/* ---------------------------------------------------------------------------------- */}

        <div className="body-page">
          <div className="book-content">
            <div className="our-services">
              <h5 className="header-title">Welcome to Library</h5>
              <div className="container">
                <div className="row">
                  <div className="col-sm-12 col-md-12 col-lg-3">
                    <div className="service">
                      <div className="media">
                        <div className="service-card">
                          <i className="fas fa-truck mr-3"></i>
                          <div className="media-body">
                            <h5 className="mt-0">Free Shipping Item</h5>
                            <span>Order over $500</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-12 col-lg-3">
                    <div className="service">
                      <div className="media">
                        <div className="service-card">
                          <i className="fas fa-undo mr-3"></i>
                          <div className="media-body">
                            <h5 className="mt-0">Money Back Guarantee</h5>
                            <span>100% money back</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-12 col-lg-3">
                    <div className="service">
                      <div className="media">
                        <div className="service-card">
                          <i className="fas fa-piggy-bank mr-3"></i>
                          <div className="media-body">
                            <h5 className="mt-0">Cash On Delivery</h5>
                            <span>Lorem ipsum dolor amet</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-12 col-lg-3">
                    <div className="service">
                      <div className="media">
                        <div className="service-card">
                          <i className="fas fa-hands-helping mr-3"></i>
                          <div className="media-body">
                            <h5 className="mt-0">Help & Support</h5>
                            <span>Call us: +0123,4567.89</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="App">
              {books.length > 0 ? (
                <SlideShow books={scienceBooks} />
              ) : (
                <p>Loading...</p>
              )}
            </div>

            <div className="App">
              {books.length > 0 ? (
                <SlideShow books={businessBooks} />
              ) : (
                <p>Loading...</p>
              )}
            </div>

            <div className="App">
              {books.length > 0 ? (
                <SlideShow books={discoveryBooks} />
              ) : (
                <p>Loading...</p>
              )}
            </div>

            <div className="App">
              {books.length > 0 ? (
                <SlideShow books={historyBooks} />
              ) : (
                <p>Loading...</p>
              )}
            </div>

            <div className="App">
              {books.length > 0 ? (
                <SlideShow books={growYourSelftBooks} />
              ) : (
                <p>Loading...</p>
              )}
            </div>

            <div className="App">
              {books.length > 0 ? (
                <SlideShow books={healthBooks} />
              ) : (
                <p>Loading...</p>
              )}
            </div>

            <div className="App">
              {books.length > 0 ? (
                <SlideShow books={novelBooks} />
              ) : (
                <p>Loading...</p>
              )}
            </div>

            <div className="App">
              {books.length > 0 ? (
                <SlideShow books={comicBooks} />
              ) : (
                <p>Loading...</p>
              )}
            </div>
          </div>
        </div>

        {/* ---------------------------------------------------------------------------------- */}

        <div className="footer">
          <div className="container">
            <div className="row footer-container">
              <div className="col-sm-12 col-lg-4 f-sec1  text-center text-lg-left">
                <h4 className="high-lighted-heading">About Us</h4>
                <p>
                  We take our mission of increasing our global access to quality
                  education seriously.{" "}
                </p>
                <a href="#">Read more</a>
                <h4>Social Network</h4>
                <div className="s-icons">
                  <ul className="social-icons-simple">
                    <li>
                      <a href="#" className="facebook-bg-hvr">
                        <i className="fab fa-facebook-f" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="twitter-bg-hvr">
                        <i className="fab fa-twitter" aria-hidden="true"></i>
                      </a>{" "}
                    </li>
                    <li>
                      <a href="#" className="instagram-bg-hvr">
                        <i className="fab fa-instagram" aria-hidden="true"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-12 col-lg-5 f-sec2 ">
                <div className="row">
                  <div className="col-12 col-md-6">
                    <h4 className="text-center text-md-left">Information</h4>
                    <ul className="text-center text-md-left">
                      <li>
                        <a href="#">About Us</a>
                      </li>
                      <li>
                        <a href="#">Delivery Information</a>
                      </li>
                      <li>
                        <a href="#">Privacy Policy</a>
                      </li>
                      <li>
                        <a href="#">Terms & Condition</a>
                      </li>
                      <li>
                        <a href="#">FAQ</a>
                      </li>
                      <li>
                        <a href="book-shop\contact.html">Contact Us</a>
                      </li>
                      <li>
                        <a href="book-shop\product-listing.html">Products</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-12 col-md-6">
                    <h4 className="text-center text-md-left">Account Info</h4>
                    <ul className="text-center text-md-left">
                      <li>
                        <a href="#">Login & Register</a>
                      </li>
                      <li>
                        <a href="book-shop\shop-cart.html">Order History</a>
                      </li>
                      <li>
                        <a href="#">Shipping Info</a>
                      </li>
                      <li>
                        <a href="#">Refund Policy</a>
                      </li>
                      <li>
                        <a href="#">Responsive Website</a>
                      </li>
                      <li>
                        <a href="#">Subscription</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-lg-3 f-sec3  text-center text-lg-left">
                <h4>Our Portfolio</h4>
                <div className="foot-tag-list">
                  <span>Classic</span>
                  <span>Journal</span>
                  <span>History</span>
                  <span>Poetry</span>
                  <span>Dictionary</span>
                  <span>Shopping</span>
                  <span>Fantasy</span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 footer_notes">
                <p className="whitecolor text-center w-100 wow fadeInDown">
                  &copy; 2020 MegaOne. Made With Love by{" "}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="search-box-overlay">
          <a>
            <i className="fas fa-times cross-sign" id="close-window"></i>
          </a>

          <div className="container">
            <div className="row">
              <div className="col-12 search-col">
                <form action="#">
                  <div className="input-group search-box-form">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search Here"
                      aria-label="Search Here"
                    />
                    <div className="input-group-prepend">
                      <button
                        className="input-group-text"
                        type="submit"
                        id="basic-addon1"
                      >
                        <i className="fas fa-search"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div className="search-listing row">
                <div className="col-12 mb-4">
                  <h4 className="">Filtered Items</h4>
                </div>
                <div className="col-12">
                  <div className="listing-search-scroll">
                    <div className="media row">
                      <div className="img-holder ml-1 mr-2 col-4">
                        <a href="#">
                          <img
                            src="book-shop\img\book-1.jpg"
                            className="align-self-center"
                            alt="cartitem"
                          />
                        </a>
                      </div>
                      <div className="media-body mt-auto mb-auto col-8">
                        <h5 className="name">
                          <a href="#">So Sad Today</a>
                        </h5>
                        <p className="category">Award Winning Book</p>
                        <a
                          className="btn black-sm-btn"
                          href="book-shop\shop-cart.html"
                        >
                          <i className="fas fa-shopping-bag"></i>
                        </a>
                        <a className="btn black-sm-btn" href="#">
                          <i className="fas fa-eye"></i>
                        </a>
                      </div>
                    </div>
                    <div className="media row">
                      <div className="img-holder ml-1 mr-2 col-4">
                        <a href="#">
                          <img
                            src="book-shop\img\book-2.jpg"
                            className="align-self-center"
                            alt="cartitem"
                          />
                        </a>
                      </div>
                      <div className="media-body mt-auto mb-auto col-8">
                        <h5 className="name">
                          <a href="#">As I Lay Dying</a>
                        </h5>
                        <p className="category">Award Winning Book</p>
                        <a
                          className="btn black-sm-btn"
                          href="book-shop\shop-cart.html"
                        >
                          <i className="fas fa-shopping-bag"></i>
                        </a>
                        <a className="btn black-sm-btn" href="#">
                          <i className="fas fa-eye"></i>
                        </a>
                      </div>
                    </div>
                    <div className="media row">
                      <div className="img-holder ml-1 mr-2 col-4">
                        <a href="#">
                          <img
                            src="book-shop\img\book-3.jpg"
                            className="align-self-center"
                            alt="cartitem"
                          />
                        </a>
                      </div>
                      <div className="media-body mt-auto mb-auto col-8">
                        <h5 className="name">
                          <a href="#">Love Does</a>
                        </h5>
                        <p className="category">Award Winning Book</p>
                        <a
                          className="btn black-sm-btn"
                          href="book-shop\shop-cart.html"
                        >
                          <i className="fas fa-shopping-bag"></i>
                        </a>
                        <a className="btn black-sm-btn" href="#">
                          <i className="fas fa-eye"></i>
                        </a>
                      </div>
                    </div>
                    <div className="media row">
                      <div className="img-holder ml-1 mr-2 col-4">
                        <a href="#">
                          <img
                            src="book-shop\img\book-2-1.jpg"
                            className="align-self-center"
                            alt="cartitem"
                          />
                        </a>
                      </div>
                      <div className="media-body mt-auto mb-auto col-8">
                        <h5 className="name">
                          <a href="#">The Last Stand</a>
                        </h5>
                        <p className="category">Award Winning Book</p>
                        <a
                          className="btn black-sm-btn"
                          href="book-shop\shop-cart.html"
                        >
                          <i className="fas fa-shopping-bag"></i>
                        </a>
                        <a className="btn black-sm-btn" href="#">
                          <i className="fas fa-eye"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <hr />
              </div>

              <div className="col-12">
                <h4 className="outlet-title text-center"> - Author - </h4>
              </div>

              <div className="col-12">
                <div className="search-box-meida-items owl-carousel owl-theme">
                  <div className="item">
                    <div className="brand-search-box ml-auto mr-auto">
                      <div className="media">
                        <div className="brand-box-holder">
                          <a href="#">
                            {" "}
                            <img
                              className="mr-3"
                              src="book-shop\img\author1.jpg"
                              alt="Generic placeholder image"
                            />
                          </a>
                        </div>
                        <div className="media-body">
                          <h5 className="mt-0">
                            <a href="#"> Eva Smith</a>
                          </h5>
                          <p> Cras sit amet nibh libero.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="brand-search-box ml-auto mr-auto">
                      <div className="media">
                        <div className="brand-box-holder">
                          <a href="#">
                            {" "}
                            <img
                              className="mr-3"
                              src="book-shop\img\author2.jpg"
                              alt="Generic placeholder image"
                            />
                          </a>
                        </div>
                        <div className="media-body">
                          <h5 className="mt-0">
                            <a href="#">Rosa Parks</a>
                          </h5>
                          <p> Cras sit amet nibh libero.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="brand-search-box ml-auto mr-auto">
                      <div className="media">
                        <div className="brand-box-holder">
                          <a href="#">
                            {" "}
                            <img
                              className="mr-3"
                              src="book-shop\img\author3.jpg"
                              alt="Generic placeholder image"
                            />
                          </a>
                        </div>
                        <div className="media-body">
                          <h5 className="mt-0">
                            <a href="#">Alan Yang</a>
                          </h5>
                          <p> Cras sit amet nibh libero.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="brand-search-box ml-auto mr-auto">
                      <div className="media">
                        <div className="brand-box-holder">
                          <a href="#">
                            <img
                              className="mr-3"
                              src="book-shop\img\author4.jpg"
                              alt="Generic placeholder image"
                            />
                          </a>
                        </div>
                        <div className="media-body">
                          <h5 className="mt-0">
                            <a href="#">Kam John</a>
                          </h5>
                          <p> Cras sit amet nibh libero.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!--END SEARCH AREA -->

<!--START Cart Box--> */}
        <div className="cart-box-overlay">
          <a>
            <i className="fas fa-times cross-sign" id="close-window1"></i>
          </a>

          <div className="container">
            <div className="row">
              <div className="search-listing row">
                <div className="col-12 mb-4">
                  <h4 className="">Shop Cart</h4>
                </div>
                <div className="col-12">
                  <div className="listing-search-scroll">
                    <div className="media row">
                      <div className="img-holder ml-1 mr-2 col-4">
                        <a href="#">
                          <img
                            src="book-shop\img\book-1.jpg"
                            className="align-self-center"
                            alt="cartitem"
                          />
                        </a>
                      </div>
                      <div className="media-body mt-auto mb-auto col-8">
                        <h5 className="name">
                          <a href="#">So Sad Today</a>
                        </h5>
                        <p className="category">light wear Lastest</p>
                        <a
                          className="btn black-sm-btn"
                          href="book-shop\shop-cart.html"
                        >
                          <i className="fas fa-shopping-bag"></i>
                        </a>
                        <a className="btn black-sm-btn">
                          <i className="fas fa-eye"></i>
                        </a>
                      </div>
                    </div>
                    <div className="media row">
                      <div className="img-holder ml-1 mr-2 col-4">
                        <a href="#">
                          <img
                            src="book-shop\img\book-2.jpg"
                            className="align-self-center"
                            alt="cartitem"
                          />
                        </a>
                      </div>
                      <div className="media-body mt-auto mb-auto col-8">
                        <h5 className="name">
                          <a href="#">As I Lay Dying</a>
                        </h5>
                        <p className="category">light wear Lastest</p>
                        <a
                          className="btn black-sm-btn"
                          href="book-shop\shop-cart.html"
                        >
                          <i className="fas fa-shopping-bag"></i>
                        </a>
                        <a className="btn black-sm-btn" href="#">
                          <i className="fas fa-eye"></i>
                        </a>
                      </div>
                    </div>
                    <div className="media row">
                      <div className="img-holder ml-1 mr-2 col-4">
                        <a href="#">
                          <img
                            src="book-shop\img\book-3.jpg"
                            className="align-self-center"
                            alt="cartitem"
                          />
                        </a>
                      </div>
                      <div className="media-body mt-auto mb-auto col-8">
                        <h5 className="name">
                          <a href="#">Love Does</a>
                        </h5>
                        <p className="category">light wear Lastest</p>
                        <a
                          className="btn black-sm-btn"
                          href="book-shop\shop-cart.html"
                        >
                          <i className="fas fa-shopping-bag"></i>
                        </a>
                        <a className="btn black-sm-btn" href="#">
                          <i className="fas fa-eye"></i>
                        </a>
                      </div>
                    </div>
                    <div className="media row">
                      <div className="img-holder ml-1 mr-2 col-4">
                        <a href="#">
                          <img
                            src="book-shop\img\book-2-1.jpg"
                            className="align-self-center"
                            alt="cartitem"
                          />
                        </a>
                      </div>
                      <div className="media-body mt-auto mb-auto col-8">
                        <h5 className="name">
                          <a href="#">The Last Stand</a>
                        </h5>
                        <p className="category">light wear Lastest</p>
                        <a
                          className="btn black-sm-btn"
                          href="book-shop\shop-cart.html"
                        >
                          <i className="fas fa-shopping-bag"></i>
                        </a>
                        <a className="btn black-sm-btn" href="#">
                          <i className="fas fa-eye"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bag-btn">
              <h4 className="total">
                <span>Total: </span>100$
              </h4>
              <a href="#" className="btn green-color-yellow-gradient-btn">
                View Bag{" "}
              </a>
              <a href="#" className="btn yellow-color-green-gradient-btn">
                Checkout{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main_page;
