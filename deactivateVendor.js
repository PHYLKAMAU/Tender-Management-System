import React from 'react';
import swal from 'sweetalert';

class deactivateVendor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vendorId: ''
    };
  }

  handleChange = (e) => {
    this.setState({ vendorId: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const { vendorId } = this.state;

    if (vendorId === '') {
      swal({
        title: '',
        text: 'Please enter a vendor ID',
        icon: 'warning',
      });
      return;
    }

    try {
      const response = await fetch(`http://localhost:8080/deactivateVendor/${vendorId}`, {
        method: 'PATCH',
      });

      if (response.ok) {
        swal({
          title: '',
          text: 'Vendor deactivated!',
          icon: 'success',
        });
      } else {
        throw new Error('Vendor could not be deactivated.');
      }
    } catch (error) {
      swal({
        title: '',
        text: error.message,
        icon: 'error',
      });
    }

    this.setState({ vendorId: '' });
  };

  render() {
    const { vendorId } = this.state;

    return (
      <div>
        <div id="home">
          <a href="/src\components\admin.js">
            <span className="material-symbols-outlined"> home </span>
          </a>
        </div>

        <div id="main-container">
          <div id="title">
            <h1>Deactivate A Vendor</h1>
          </div>

          <div id="form">
            <form onSubmit={this.handleSubmit}>
              <div>
                <label htmlFor="vendorId">Vendor ID : &nbsp;</label>
                <input
                  type="text"
                  id="vendorId"
                  placeholder="Please enter ID of the Vendor"
                  value={vendorId}
                  onChange={this.handleChange}
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
}

export default deactivateVendor;
