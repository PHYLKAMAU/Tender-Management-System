import React, { useState } from 'react';

function ViewAllVendors() {
    const [vendors, setVendors] = useState([]);
    
    const fetchVendors = () => {
        fetch("http://localhost:8080/vendors")
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error("Failed to retrieve vendors");
                }
            })
            .then(vendors => {
                setVendors(vendors);
                alert("Vendors retrieved successfully!");
            })
            .catch(error => {
                console.error(error);
                alert("Failed to retrieve vendors");
            });
    };

    return (
        <div>
            <h1>Vendors</h1>
            <hr />
            <button onClick={fetchVendors}>Get All Vendors</button>
            <table>
                <thead>
                    <tr>
                        <th>Vendor ID</th>
                        <th>Username</th>
                        <th>Is Active</th>
                        <th>Is Eligible</th>
                    </tr>
                </thead>
                <tbody>
                    {vendors.map(vendor => (
                        <tr key={vendor.vendorId}>
                            <td>{vendor.vendorId}</td>
                            <td>{vendor.username}</td>
                            <td>{vendor.isActive ? "Yes" : "No"}</td>
                            <td>{vendor.isEligible ? "Yes" : "No"}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ViewAllVendors;
