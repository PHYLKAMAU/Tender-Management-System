import React, { useState } from 'react';
import'/ bidHistoryByVendorId.css';
function bidHistoryByVendorId() {
    const [vendorId, setVendorId] = useState('');
    const [bidHistory, setBidHistory] = useState([]);

    const getBidHistory = async () => {
        try {
            const response = await fetch(`http://localhost:8080/vendors/bidHistory/${vendorId}`);
            if (!response.ok) {
                throw new Error('Failed to fetch bid history');
            }
            const bidHistoryData = await response.json();
            setBidHistory(bidHistoryData);
        } catch (error) {
            console.error(error);
            alert('Failed to fetch bid history');
        }
    };

    const redirectToPlaceBid = () => {
        window.location.href = 'placeBid.html';
    };

    return (
        <div>
            <h1>Bid History</h1>
            <label htmlFor="vendorId">Vendor ID:</label>
            <input 
                type="number" 
                id="vendorId" 
                value={vendorId} 
                onChange={(e) => setVendorId(e.target.value)} 
            />
            <button onClick={getBidHistory}>View Bid History</button>
            <button id="placeBidButton" onClick={redirectToPlaceBid}>Place Bid</button>
            <button id="homepage" onClick={() => { window.location.href = 'homepage.js'; }}>HomePage</button>
            <table id="bidHistoryTable">
                <thead>
                    <tr>
                        <th>Bid ID</th>
                        <th>Tender ID</th>
                        <th>Bid Amount</th>
                        <th>Duration (days)</th>
                        <th>Bid Status</th>
                        <th>Tender Image</th>
                    </tr>
                </thead>
                <tbody>
                    {bidHistory.map(bid => (
                        <tr key={bid.id}>
                            <td>{bid.id}</td>
                            <td>{bid.tender.tenderId}</td>
                            <td>{bid.bidAmount}</td>
                            <td>{bid.durationInDays}</td>
                            <td>{bid.bidStatus}</td>
                            <td><img src={bid.tender.image} alt="Tender" /></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default bidHistoryByVendorId;
