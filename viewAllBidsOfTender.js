import React, { useState } from 'react';
import swal from 'sweetalert';

function ViewAllBidsOfTender() {
  const [tenderId, setTenderId] = useState('');
  const [bids, setBids] = useState([]);

  const viewBids = () => {
    if (tenderId === '') {
      swal({
        title: '',
        text: 'Please enter a tender ID',
        icon: 'warning',
      });
      return;
    }

    fetch(`http://localhost:8080/tenders/bid/${tenderId}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Failed to retrieve bids');
        }
      })
      .then((result) => {
        swal({
          title: '',
          text: 'Bids retrieved successfully!',
          icon: 'success',
        });
        setBids(result);
      })
      .catch((error) => {
        swal({
          title: '',
          text: 'No bids found for the given tender ID',
          icon: 'error',
        });
      });
  };

  return (
    <div>
      <h1>View All Bids of a Tender</h1>
      <div>
        <label htmlFor="tenderId">Tender ID: &nbsp;</label>
        <input
          type="text"
          id="tenderId"
          placeholder="Please enter ID of the Tender"
          value={tenderId}
          onChange={(e) => setTenderId(e.target.value)}
          required
        />
      </div>
      <div style={{ marginLeft: '15px' }}>
        <button type="button" onClick={viewBids}>
          Submit
        </button>
      </div>
      <div>
        <table id="bid-list">
          <thead>
            <tr>
              <th>Bid ID</th>
              <th>Tender ID</th>
              <th>Tender Title</th>
              <th>Vendor ID</th>
              <th>Vendor Name</th>
              <th>Bid Price</th>
              <th>Duration in Days</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {bids.map((bid) => (
              <tr key={bid.id}>
                <td>{bid.id}</td>
                <td>{bid.tender.tenderId}</td>
                <td>{bid.tender.title}</td>
                <td>{bid.vendor.vendorId}</td>
                <td>{bid.vendor.username}</td>
                <td>{bid.bidAmount}</td>
                <td>{bid.durationInDays}</td>
                <td>{bid.bidStatus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ViewAllBidsOfTender;
