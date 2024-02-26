import React, { useState } from 'react';
import'./ availableTenders.css';
function availableTenders() {
    const [tenders, setTenders] = useState([]);

    const fetchTenders = () => {
        fetch("http://localhost:8080/availabletenders")
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error("Failed to retrieve available tenders");
                }
            })
            .then(tendersData => {
                setTenders(tendersData);
            })
            .catch(error => {
                console.error(error);
                alert("Failed to retrieve available tenders");
            });
    };

    const redirectToPlaceBid = () => {
        window.location.href = "placeBid.html";
    };

    return (
        <div>
            <h1>Available Tenders</h1>
            <button id="showTendersButton" onClick={fetchTenders}>Show Available Tenders</button>
            <button id="placeBidButton" onClick={redirectToPlaceBid}>Place Bid</button>
            <button id="homepage" onClick={() => { window.location.href = 'homepage.js'; }}>HomePage</button>
            <hr />
            <table id="tendersTable">
                <thead>
                    <tr>
                        <th>Tender ID</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Image</th>
                        <th>Creation Date</th>
                        <th>Duration (days)</th>
                        <th>Tender Price</th>
                    </tr>
                </thead>
                <tbody>
                    {tenders.map(tender => (
                        <tr key={tender.tenderId}>
                            <td>{tender.tenderId}</td>
                            <td>{tender.title}</td>
                            <td>{tender.description}</td>
                            <td><img src={tender.image} alt={tender.title} /></td>
                            <td>{tender.creationDate}</td>
                            <td>{tender.durationInDays}</td>
                            <td>{tender.tenderPrice}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default availableTenders;
