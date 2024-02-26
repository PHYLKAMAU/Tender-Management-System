import React, { useState } from 'react';
import swal from 'sweetalert';

function ViewAllTenders() {
  const [tenders, setTenders] = useState([]);

  const fetchTenders = () => {
    fetch('http://localhost:8080/tenders')
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Failed to retrieve tenders');
        }
      })
      .then((data) => {
        swal({
          title: '',
          text: 'Tenders retrieved successfully!',
          icon: 'success',
        });
        setTenders(data);
      })
      .catch((error) => {
        console.error(error);
        swal({
          title: '',
          text: 'Failed to retrieve tenders',
          icon: 'error',
        });
      });
  };

  return (
    <div>
      <h1>Tenders</h1>
      <hr />
      <button onClick={fetchTenders}>Get All Tenders</button>
      <table>
        <thead>
          <tr>
            <th>Tender ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Image</th>
            <th>Creation Date</th>
            <th>Duration (days)</th>
            <th>Tender Price</th>
            <th>Assigned Vendor</th>
          </tr>
        </thead>
        <tbody>
          {tenders.map((tender) => (
            <tr key={tender.tenderId}>
              <td>{tender.tenderId}</td>
              <td>{tender.title}</td>
              <td>{tender.description}</td>
              <td>
                <img src={tender.image} alt={tender.title} />
              </td>
              <td>{tender.creationDate}</td>
              <td>{tender.durationInDays}</td>
              <td>{tender.tenderPrice}</td>
              <td>{tender.assignedVendor ? tender.assignedVendor.vendorId : 'Not assigned'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ViewAllTenders;
