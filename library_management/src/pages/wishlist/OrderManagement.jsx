import React, { useState } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';';
import axios from "axios";
import { toast, ToastContainer } from 'react-toastify';

function OrderManagement() {
  const [orderID, setOrderID] = useState("");
  const [orders, setOrders] = useState([]);
  const [returnDate, setReturnDate] = useState("");

  const handleSearchOrder = async () => {
    try {
      const response = await axios.get(`http://localhost:9191/api/orders/search/${orderID}`);
      setOrders(response.data);
    } catch (error) {
      console.error("Order search failed:", error);
      toast.error("Order search failed");
    }
  };

  const handleConfirmBorrow = async () => {
    try {
      await axios.put(`http://localhost:9191/api/orders/${orderID}/return`, { returnDate });
      toast.success("Borrow confirmed!");
      setOrders([]);
    } catch (error) {
      console.error("Borrow confirmation failed:", error);
      toast.error("Borrow confirmation failed");
    }
  };

  return (
    <div className="OrderManagement">
      <ToastContainer />
      <div className="container mt-4">
        <h1>Order Management</h1>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Order ID"
            value={orderID}
            onChange={(e) => setOrderID(e.target.value)}
          />
          <button className="btn btn-outline-primary mt-2" onClick={handleSearchOrder}>
            Search Order
          </button>
        </div>
        {orders.length > 0 && (
          <>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">User Name</th>
                  <th scope="col">User Email</th>
                  <th scope="col">Book Name</th>
                  <th scope="col">Author</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.orderID}>
                    <td>{order.userName}</td>
                    <td>{order.userEmail}</td>
                    <td>{order.book.bookName}</td>
                    <td>{order.book.bookAuthor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="mb-3">
              <input
                type="date"
                className="form-control"
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
              />
              <button className="btn btn-outline-primary mt-2" onClick={handleConfirmBorrow}>
                Confirm Borrow
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default OrderManagement;
