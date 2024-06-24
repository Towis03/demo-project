import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Main_page from "./pages/_id";
import Signup from "./pages/authen/Signup";
import Signin from "./pages/authen/Signin";
import ForgotPasswordForm from "./pages/authen/ForgotPass";
import ResetPassword from "./pages/authen/ResetPassword";
import ManageCustomer from "./pages/authen/ManageCustomer";
import ManageStaff from "./pages/authen/ManageStaff";
import BookDetail from "./pages/details/BookDetail";
import { UserProvider } from "./ultils/userContext";
import Wishlist from "./pages/wishlist/Wishlist";
import SearchOrder from "./pages/wishlist/StaffOrderManagement";
import { WishlistProvider } from "./pages/wishlist/WishlistContext";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <UserProvider>
      <WishlistProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Main_page />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/BookDetail/:id" element={<BookDetail />} />
            <Route path="/forgotPass" element={<ForgotPasswordForm />} />
            <Route path="/managecustomer" element={<ManageCustomer />} />
            <Route path="/managestaff" element={<ManageStaff />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/manageborrow" element={<SearchOrder />} />
          </Routes>
        </Router>
      </WishlistProvider>
    </UserProvider>
  );
};

export default App;
