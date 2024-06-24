import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from "../nav-bar/Header";
import "./UIConfig/ManageStaff.css";
import { IoTrashBin } from "react-icons/io5";
import { TiTick } from "react-icons/ti";
const ManageStaff = () => {
  const [users, setUsers] = useState([]);
  const [updatedUsers, setUpdatedUsers] = useState({});
  const [newUser, setNewUser] = useState({
    userName: "",
    userMail: "",
    userPhone: "",
    userPass: "",
    confPassword: "",
    userAddress: "",
    role: "STAFF",
  });
  const [showModal, setShowModal] = useState(false);
  const token = localStorage.getItem("token");

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:9191/api/users", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const customers = response.data.filter(
        (user) => user.role === "ADMIN" || user.role === "STAFF"
      );
      setUsers(customers);
    } catch (error) {
      console.error("Fetch users failed:", error);
    }
  };

  const addUser = async () => {
    try {
      await axios.post("http://localhost:9191/register", {
        userName: newUser.userName,
        userMail: newUser.userMail,
        userPhone: newUser.userPhone,
        userPass: newUser.userPass,
        confPassword: newUser.confPassword,
        userAddress: newUser.userAddress,
        role: newUser.role,
        isEnabled: true,
      });
      fetchUsers();
      setShowModal(false);
      setNewUser({
        userName: "",
        userMail: "",
        userPhone: "",
        userPass: "",
        userAddress: "",
        role: "STAFF",
        isEnabled: true,
      });
    } catch (error) {
      console.error("Add user failed:", error.message);
      alert(`Add user failed: ${error.message}`);
    }
  };

  const updateUser = async (id, updatedUser) => {
    try {
      await axios.put(`http://localhost:9191/api/users/${id}`, updatedUser, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      fetchUsers();
    } catch (error) {
      console.error("Update user failed:", error);
    }
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:9191/api/users/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      fetchUsers();
    } catch (error) {
      console.error("Delete user failed:", error);
    }
  };

  useEffect(() => {
    if (token) {
      fetchUsers();
    } else {
      console.error("No token found");
    }
  }, [token]);

  const handleInputChange = (id, key, value) => {
    setUpdatedUsers((prevState) => ({
      ...prevState,
      [id]: {
        ...prevState[id],
        [key]: value,
      },
    }));
  };

  const handleNewUserChange = (key, value) => {
    setNewUser((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const handleSubmit = (id) => {
    const user = users.find((user) => user.id === id);
    const updatedUser = { ...user, ...updatedUsers[id] };
    updateUser(id, updatedUser);
  };

  return (
    <>
      <Header />
      <div className="container mt-12">
        <h1>Manage Staff</h1>
        <button
          className="btn btn-primary mb-3"
          onClick={() => setShowModal(true)}
        >
          Add Account
        </button>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>User Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.userName}</td>
                <td>{user.userMail}</td>
                <td>{user.userPhone}</td>
                <td>{user.userAddress}</td>
                <td>
                  <select
                    className="form-select"
                    defaultValue={user.role}
                    onChange={(e) =>
                      handleInputChange(user.id, "role", e.target.value)
                    }
                  >
                    <option value="ADMIN">Admin</option>
                    <option value="STAFF">Staff</option>
                  </select>
                </td>
                <td>
                  <button
                    className="btn btn-success me-2"
                    onClick={() => handleSubmit(user.id)}
                  >
                    <TiTick />
                    Submit
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteUser(user.id)}
                  >
                  <IoTrashBin />
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div
          className={`modal ${showModal ? "d-block" : "d-none"}`}
          tabIndex="-1"
          role="dialog"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add New Staff</h5>
                <button
                  type="button"
                  className="close"
                  onClick={() => setShowModal(false)}
                >
                  <span>&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="form-group">
                  <label>User Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={newUser.userName}
                    onChange={(e) =>
                      handleNewUserChange("userName", e.target.value)
                    }
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    className="form-control"
                    value={newUser.userMail}
                    onChange={(e) =>
                      handleNewUserChange("userMail", e.target.value)
                    }
                  />
                </div>
                <div className="form-group">
                  <label>Phone</label>
                  <input
                    type="text"
                    className="form-control"
                    value={newUser.userPhone}
                    onChange={(e) =>
                      handleNewUserChange("userPhone", e.target.value)
                    }
                  />
                </div>
                <div className="form-group">
                  <label>Address</label>
                  <input
                    type="text"
                    className="form-control"
                    value={newUser.userAddress}
                    onChange={(e) =>
                      handleNewUserChange("userAddress", e.target.value)
                    }
                  />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    value={newUser.userPass}
                    onChange={(e) =>
                      handleNewUserChange("userPass", e.target.value)
                    }
                  />
                </div>
                <div className="form-group">
                  <label>Role</label>
                  <select
                    className="form-select"
                    value={newUser.role}
                    onChange={(e) =>
                      handleNewUserChange("role", e.target.value)
                    }
                  >
                    <option value="STAFF">Staff</option>
                    <option value="ADMIN">Admin</option>
                  </select>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={addUser}
                >
                  Add
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageStaff;
