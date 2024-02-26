import React from "react";
import swal from "sweetalert";

class AssignTenderToVendor extends React.Component {
  assign() {
    const tenderId = document.getElementById("tenderId").value;
    const vendorId = document.getElementById("vendorId").value;

    if (vendorId === "" || tenderId === "") {
      swal({
        title: "",
        text: "Please fill in all fields",
        icon: "warning",
      });
      return;
    }

    const url = `http://localhost:8080/bid/assign`;

    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        tenderId: tenderId,
        vendorId: vendorId,
      }),
    })
      .then((response) => response.text())
      .then((result) => {
        swal({
          title: "",
          text: "Tender assigned to vendor!",
          icon: "success",
        });
      })
      .catch((error) => {
        swal({
          title: "",
          text: "Error!",
          icon: "error",
        });
      });
  }

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
            <h1>Assign A Tender to Vendor</h1>
          </div>

          <div id="form">
            <form action="">
              <div>
                <label htmlFor="tenderId">Tender ID : &nbsp;</label>
                <input
                  type="text"
                  name="tenderId"
                  id="tenderId"
                  placeholder="Please enter ID of the Tender"
                  required
                />
              </div>
              <div>
                <label htmlFor="vendorId">Vendor ID : &nbsp;</label>
                <input
                  type="text"
                  name="vendorId"
                  id="vendorId"
                  placeholder="Please enter ID of the Vendor"
                  required
                />
              </div>
              <div style={{ marginLeft: "15px" }}>
                <input type="submit" value="Submit" />
                <button type="button" onClick={() => this.assign()}>
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AssignTenderToVendor;
