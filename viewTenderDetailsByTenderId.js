import React, { useState } from 'react';
import'./ viewTenderDetailsByTenderId';
function viewTenderDetailsByTenderId() {
    const [tenderId, setTenderId] = useState('');
    const [tender, setTender] = useState(null);
    const [error, setError] = useState('');

    const retrieveTender = async () => {
        try {
            const response = await fetch(`http://localhost:8080/availableTenders/${tenderId}`);
            if (response.ok) {
                const data = await response.json();
                setTender(data);
            } else {
                setError('Error retrieving tender data');
            }
        } catch (error) {
            setError(error.message);
        }
    };

    const redirectToPlaceBid = () => {
        window.location.href = 'placeBid.js';
    };

    return (
        <div>
            <h1>View Available Tender by ID</h1>
            <label htmlFor="tenderId">Enter Tender ID:</label>
            <input type="text" id="tenderId" value={tenderId} onChange={(e) => setTenderId(e.target.value)} />
            <button onClick={retrieveTender}>View Tender</button>
            <button onClick={redirectToPlaceBid}>Place Bid</button>
            <button onClick={() => window.location.href = 'homepage.js'}>HomePage</button>
            <br /><br />
            {error && <p>{error}</p>}
            {tender && (
                <table id="tenderTable">
                    <thead>
                        <tr>
                            <th>Tender ID</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Creation Date</th>
                            <th>Duration (Days)</th>
                            <th>Tender Price</th>
                            <th>Image</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{tender.tenderId}</td>
                            <td>{tender.title}</td>
                            <td>{tender.description}</td>
                            <td>{tender.creationDate}</td>
                            <td>{tender.durationInDays}</td>
                            <td>{tender.tenderPrice}</td>
                            <td><img src={tender.image} alt="Tender Image" width="200" /></td>
                        </tr>
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default viewTenderDetailsByTenderId;
