import React, { useState } from 'react';
import swal from 'sweetalert';

function DeleteTender() {
  const [tenderId, setTenderId] = useState('');

  const handleChange = (e) => {
    setTenderId(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (tenderId === '') {
      swal({
        title: '',
        text: 'Please enter a tender ID',
        icon: 'warning',
      });
      return;
    }

    try {
      const response = await fetch(`http://localhost:8080/tenders/${tenderId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        const result = await response.text();
        swal({
          title: '',
          text: result,
          icon: 'success',
        });
      } else {
        throw new Error('Failed to delete tender.');
      }
    } catch (error) {
      swal({
        title: '',
        text: error.message,
        icon: 'error',
      });
    }

    setTenderId('');
  };

  return (
    <div>
      <div id="home">
        <a href="/admin">
          <span className="material-symbols-outlined"> home </span>
        </a>
      </div>

      <div id="main-container">
        <div id="title">
          <h1>Delete A Tender</h1>
        </div>

        <div id="form">
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="tenderId">Tender ID : &nbsp;</label>
              <input
                type="number"
                id="tenderId"
                placeholder="Please enter ID of the Tender"
                value={tenderId}
                onChange={handleChange}
                required
              />
            </div>
            <div style={{ marginLeft: '15px' }}>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>

        <div>
          <div id="tender-data"></div>
        </div>
      </div>
    </div>
  );
}

export default DeleteTender;

