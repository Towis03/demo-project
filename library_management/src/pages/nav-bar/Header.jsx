import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../../../src/ultils/userContext";
import { useNavigate } from "react-router-dom";
import "react-owl-carousel2/lib/styles.css";
import "react-owl-carousel2/src/owl.carousel.css";
function Header() {
  const { user, handleLogout } = useContext(UserContext);
  const navigate = useNavigate();
  console.log("userDetail", user);

  const handleWishListClick = () => {
    navigate("/wishlist");
  };
  const handleLoginClick = () => {
    navigate("/signin");
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
  const handleHomeUserClick = () => {
    navigate("/");
  };
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch(
          "https://www.googleapis.com/books/v1/volumes?q=search+terms"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setBooks(data.items);
        console.log("book api: ", data.items);
      } catch (error) {
        console.error("Fetch books failed:", error);
      }
    };
    fetchBooks();
  }, []);
  return (
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
                    onClick={handleHomeUserClick}
                  >
                    <img src="" alt="logo" className="logo-scrolled" />
                  </a>

                  <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ml-auto">
                      <li className="nav-item">
                        <a className="nav-link" onClick={handleHomeUserClick}>
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
                                  <h5 className="dropdown-title"> Classic </h5>
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
                                  <h5 className="dropdown-title"> NOVEL's </h5>
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

                                  <h5 className="dropdown-title"> HISTORY </h5>
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
                                    Ipsum has been the industry's standard dummy
                                    text
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
                        <a className="nav-link" href="book-shop\contact.html">
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
                        <a className="nav-link" href="book-shop\contact.html">
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
                              <a href="" onClick={handleManageCustomerClick}>
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
  );
}

export default Header;
