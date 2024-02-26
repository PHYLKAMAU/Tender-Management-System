import React from "react";
import { Route, Routes, Link } from 'react-router-dom';
import "./admin.css";
import "./adminLogin";
import CreateNewTendor from "../AdminMethods/createNewTendor.js";
import UpdateTender from "../AdminMethods/updateTender.js";
import DeleteTender from "../AdminMethods/deleteTender.js";
import ViewAllTenders from "../AdminMethods/viewAllTenders.js";
import ViewAllTendersByStatus from "../AdminMethods/viewAllTendersByStatus.js";
import ViewAllVendors from "../AdminMethods/viewAllVendors.js";
import ViewAllActiveVendors from "../AdminMethods/viewAllActiveVendors.js";
import DeactivateVendor from "../AdminMethods/deactivateVendor.js";
import BanVendorFromBid from "../AdminMethods/banVendorFromBid.js";
import AssignTenderToVendor from "../AdminMethods/assignTenderToVendor.js";
import ViewAllBidsOfTender from "../AdminMethods/viewAllBidsOfTender.js";

function admin() {
    return (
        <div>
            <div id="home">
                <Link to="/">
                    <span className="material-symbols-outlined"> home </span>
                </Link>
            </div>

            <div id="main-container">
                <div id="title"><h1>Admin Menu</h1></div>

                <div id="list">
                    {/* Define your routes */}
                    <Routes>
                        <Route path="/createNewTendor" element={<CreateNewTendor />} />
                        <Route path="/updateTender" element={<UpdateTender />} />
                        <Route path="/deleteTender" element={<DeleteTender />} />
                        <Route path="/viewAllTenders" element={<ViewAllTenders />} />
                        <Route path="/viewAllTendersByStatus" element={<ViewAllTendersByStatus />} />
                        <Route path="/viewAllVendors" element={<ViewAllVendors />} />
                        <Route path="/viewAllActiveVendors" element={<ViewAllActiveVendors />} />
                        <Route path="/deactivateVendor" element={<DeactivateVendor />} />
                        <Route path="/banVendorFromBid" element={<BanVendorFromBid />} />
                        <Route path="/assignTenderToVendor" element={<AssignTenderToVendor />} />
                        <Route path="/viewAllBidsOfTender" element={<ViewAllBidsOfTender />} />
                    </Routes>
                </div>
                <button id="vendorPage">Go to Vendor Menu</button>
            </div>
        </div>
    );
}

export default admin;
