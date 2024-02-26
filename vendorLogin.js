import React from "react";
import './form.css';

function vendorLogin() {
    return (
        <div>
            <div id="home">
                <a href="/src\App.js">
                    <span className="material-symbols-outlined"> home </span></a
                >
            </div>

            <div id="main-container">
                <div id="title"><h1>VENDOR LOGIN</h1></div>

                <div id="form">
                    <form action="">
                        <div>
                            <label htmlFor="">Username : &nbsp;</label>
                            <input
                                type="text"
                                name=""
                                id="username"
                                placeholder="Please enter your username"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="">Password : &nbsp;</label>
                            <input
                                type="password"
                                name=""
                                id="password"
                                placeholder="Please enter your password"
                                required
                            />
                        </div>
                        <div style={{marginLeft: "15px"}}>
                            <input type="submit" value="Submit" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default vendorLogin;
