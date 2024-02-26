import React, { useState } from "react";
import './form.css';

function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    if (e.target.id === "username") {
      setUsername(e.target.value);
    } else if (e.target.id === "password") {
      setPassword(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === "" || password === "") {
      alert("Please fill in all fields");
      return;
    }

    if (username === "admin" && password === "admin") {
      window.location.href = "/admin.js";
      return;
    }

    login({ username, password });
  };

  const login = (obj) => {
    let url = `http://localhost:8080/login/${obj.username}/${obj.password}`;
    fetch(url, {
      method: "POST",
      body: JSON.stringify(obj),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.id) {
          window.location.href = "/app.js"; 
        } else {
          alert("Login failed");
        }
      });
  };

  return (
    <div>
      <div id="home">
        <a href="/src\App.js">
          <span className="material-symbols-outlined"> home </span>
        </a>
      </div>

      <div id="main-container">
        <div id="title">
          <h1>ADMIN LOGIN</h1>
        </div>

        <div id="form">
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="username">Username : &nbsp;</label>
              <input
                type="text"
                id="username"
                placeholder="Please enter your username"
                required
                value={username}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="password">Password : &nbsp;</label>
              <input
                type="password"
                id="password"
                placeholder="Please enter your password"
                required
                value={password}
                onChange={handleChange}
              />
            </div>
            <div style={{ marginLeft: "15px" }}>
              <input type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
