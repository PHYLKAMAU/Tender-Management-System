import React from "react";
import swal from "sweetalert";

function vLogin() {
  async function handleLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "" || password === "") {
      swal({
        title: "",
        text: "Please fill in all fields",
        icon: "warning",
      });
      return;
    }

    if (username === "admin" && password === "admin") {
      swal({
        title: "",
        text: "Welcome Admin, Login Successful!",
        icon: "success",
      });

      setTimeout(() => {
        window.location.href = "/src\components\admin.js";
      }, 3000);
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:8080/login/${username}/${password}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();
      let name = "Welcome " + username + ", Login Successful!";
      if (data.username === username) {
        swal({
          title: "",
          text: name,
          icon: "success",
        });
        setTimeout(() => {
          window.location.href =
            "/Front-end/VendorMethods/Html/homepage.html";
        }, 3000);
      } else {
        swal({
          title: "",
          text: "Login Failed",
          icon: "error",
        });
      }
    } catch (error) {
      swal({
        title: "",
        text: "Something Went Wrong. Try again later",
        icon: "error",
      });
    }
  }

  function signUp() {
    window.location.href =
      "/Front-end/VendorMethods/Html/createNewVendor.html";
  }

  return (
    <div>
      <div id="home">
        <a href="/src\App.js">
          <span className="material-symbols-outlined"> home </span>
        </a>
      </div>
      <h1>Login Form</h1>
      <form>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" /><br />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" /><br />

        <button type="button" onClick={handleLogin}>Submit</button>
      </form>

      <div id="main-container">
        <div id="title">
          <h1>Login Form</h1>
        </div>

        <div id="admin-form">
          <form id="loginform">
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter Your Username"
            /><br />

            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter Your Password"
            /><br />

            <button
              type="button"
              style={{ marginTop: "10px" }}
              onClick={handleLogin}
            >
              Log in
            </button>
            <h4 style={{ textAlign: "center", fontFamily: "Archivo" }}>
              Not an existing user?
            </h4>
            <button
              type="button"
              style={{ marginTop: "20px" }}
              onClick={signUp}
            >
              Create new account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default vLogin;
