import React from "react";
import swal from "sweetalert";

class banVendorFromBid extends React.Component {
  deactivate = () => {
    const vendorId = document.getElementById("vendorId").value;

    if (vendorId === "") {
      swal({
        title: "",
        text: "Please enter a vendor ID",
        icon: "warning",
      });
      return;
    }

    const url = `http://localhost:8080/banVendorFromBidding/${vendorId}`;

    fetch(url, {
      method: "PATCH",
    })
      .then((response) => response.text())
      .then((result) => {
        swal({
          title: "",
          text: "Vendor banned from bidding!",
          icon: "success",
        });
      })
      .catch((error) => {
        swal({
          title: "",
          text: "Vendor could not be banned.",
          icon: "error",
        });
      });
  };

  render() {
    return (
      <div>
        <div id="home">
          <a href="/src\components\admin.js">
            <span className="material-symbols-outlined"> home </span>
          </a>
        </div>

        <div id="main-container">
          <div id="title">
            <h1>Ban A Vendor From Bidding</h1>
          </div>

          <div id="form">
            <form>
              <div>
                <label htmlFor="vendorId">Vendor ID : &nbsp;</label>
                <input
                  type="text"
                  name=""
                  id="vendorId"
                  placeholder="Please enter ID of the Vendor"
                  required
                />
              </div>
              <div style={{ marginLeft: "15px" }}>
                <button type="button" onClick={this.deactivate}>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default banVendorFromBid;
