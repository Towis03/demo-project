import React, { createContext, useState, useEffect, useContext } from "react";
import { toast } from "react-toastify";
import { WishlistContext } from "../pages/wishlist/WishlistContext";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLoginSuccess = (user) => {
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    toast.success("Đăng xuất thành công!");
    window.location.href = "/login";
  };

  return (
    <UserContext.Provider value={{ user, handleLoginSuccess, handleLogout }}>
      {children}
    </UserContext.Provider>
  );
};
