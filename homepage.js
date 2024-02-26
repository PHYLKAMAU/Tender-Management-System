import React from 'react';
import'./ homepage.css';
function homepage() {
    const handleButtonClick = (location) => {
        window.location.href = location;
    };

    const handleMouseOver = (event) => {
        const backgroundImage = event.target.getAttribute('data-image');
        document.body.style.backgroundImage = `url(${backgroundImage})`;
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundPosition = 'center';
        document.body.style.backgroundRepeat = 'no-repeat';
    };

    const handleMouseOut = () => {
        document.body.style.backgroundImage = 'url("background-image.jpg")';
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundPosition = 'center';
        document.body.style.backgroundRepeat = 'no-repeat';
    };

    return (
        <div>
            <h1>Welcome To Vendor Portal</h1>
            <br />
            <button onClick={() => handleButtonClick('/Front-end/Html/availableTenders.html')}
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                    data-image="/path/to/available-tenders-background.jpg">
                Available Tenders
            </button>
            <button onClick={() => handleButtonClick('/Front-end/Html/viewTenderDetailsByTenderId.html')}
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                    data-image="/path/to/tender-details-background.jpg">
                View Tender Details by Tender ID
            </button>
            <button onClick={() => handleButtonClick('/Front-end/Html/updateVendorPassword.html')}
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                    data-image="/path/to/update-password-background.jpg">
                Update Vendor Password
            </button>
            <button onClick={() => handleButtonClick('/Front-end/Html/placeBid.html')}
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                    data-image="/path/to/place-bid-background.jpg">
                Place Bid
            </button>
            <button onClick={() => handleButtonClick('/Front-end/Html/bidHistoryByVendorId.html')}
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                    data-image="/path/to/bid-history-background.jpg">
                Bid History by Vendor ID
            </button>
            <button onClick={() => handleButtonClick('/Front-end/Html/vLogin.html')}
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                    data-image="/path/to/logout-background.jpg">
                Logout
            </button>
        </div>
    );
}

export default homepage;
