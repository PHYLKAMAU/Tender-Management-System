import React, { useState, useEffect } from "react";

function ViewAllActiveVendors() {
  const [vendors, setVendors] = useState([]);

  useEffect(() => {
    fetchVendors();
  }, []);

  const fetchVendors = () => {
    fetch("http://localhost:8080/activeVendors")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Failed to retrieve vendors");
        }
      })
      .then((data) => {
        setVendors(data);
      })
      .catch((error) => {
        console.error(error);
        alert("Failed to retrieve vendors");
      });
  };

  return (
    <div>
      <h1>Vendors</h1>
      <button onClick={fetchVendors}>View All Vendors</button>
      <table>
        <thead>
          <tr>
            <th>Vendor ID</th>
            <th>Username</th>
            <th>Is Active</th>
            <th>Is Eligible</th>
            {/* <th>Placed Bid on</th> */}
          </tr>
        </thead>
        <tbody>
          {vendors.map((vendor) => (
            <tr key={vendor.vendorId}>
              <td>{vendor.vendorId}</td>
              <td>{vendor.username}</td>
              <td>{vendor.isActive ? "Yes" : "No"}</td>
              <td>{vendor.isEligible ? "Yes" : "No"}</td>
              {/* <td>{vendor.tenderList.map((tender) => tender.tenderId).join(", ")}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ViewAllActiveVendors;

