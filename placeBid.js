import React, { useState } from 'react';
import'./ placeBid.css';
function placeBid() {
    const [tenderId, setTenderId] = useState('');
    const [vendorId, setVendorId] = useState('');
    const [bidAmount, setBidAmount] = useState('');
    const [durationInDays, setDurationInDays] = useState('');
    const [result, setResult] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const bid = {
            bidAmount,
            durationInDays,
        };

        try {
            const response = await fetch(`http://localhost:8080/tenders/${tenderId}/${vendorId}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(bid),
            });

            if (!response.ok) {
                alert(`Failed to place bid: ${response.status}`);
            } else {
                const resultData = await response.json();
                setResult(`Bid placed successfully. Bid ID: ${resultData.id}`);
                alert(`Bid Placed Successfully. Bid Amount is ${bidAmount}₹ and Your Tender Id is ${tenderId}`);
            }
        } catch (error) {
            alert(`Error placing bid: ${error.message}`);
        }
    };

    return (
        <div>
            <button onClick={() => window.location.href = 'homepage.html'}>HomePage</button>
            <button onClick={() => window.location.href = 'bidHistoryByVendorId.html'}>Bid History by Vendor ID</button>
            <h1>Place Bid</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="tenderId">Tender ID:</label>
                <input type="number" id="tenderId" name="tenderId" value={tenderId} onChange={(e) => setTenderId(e.target.value)} required /><br /><br />

                <label htmlFor="vendorId">Vendor ID:</label>
                <input type="number" id="vendorId" name="vendorId" value={vendorId} onChange={(e) => setVendorId(e.target.value)} required /><br /><br />

                <label htmlFor="bidAmount">Bid Amount:</label>
                <input type="number" id="bidAmount" name="bidAmount" value={bidAmount} onChange={(e) => setBidAmount(e.target.value)} required /><br /><br />

                <label htmlFor="durationInDays">Duration in Days:</label>
                <input type="number" id="durationInDays" name="durationInDays" value={durationInDays} onChange={(e) => setDurationInDays(e.target.value)} required /><br /><br />

                <input type="submit" value="Place Bid" />
            </form>

            <div id="result">{result}</div>
        </div>
    );
}

export default placeBid;
