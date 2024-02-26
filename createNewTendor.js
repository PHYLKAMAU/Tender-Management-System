import React from "react";
import swal from "sweetalert";

class createNewTender extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      image: "",
      creationDate: "",
      durationInDays: "",
      tenderPrice: "",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/tenders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.state),
      });

      if (!response.ok) {
        throw new Error("Tender creation failed");
      }

      const tender = await response.json();
      swal({
        title: "",
        text: "Tender created successfully",
        icon: "success",
      });
      this.displayTenderData(tender);
    } catch (error) {
      swal({
        title: "",
        text: "Tender creation failed",
        icon: "error",
      });
    }


    this.setState({
      title: "",
      description: "",
      image: "",
      creationDate: "",
      durationInDays: "",
      tenderPrice: "",
    });
  };

  displayTenderData = (tender) => {
  };

  render() {
    return (
      <div>
        <div id="home">
          <a href="/src\components\admin.js">
            <span className="material-symbols-outlined"> home </span>
          </a>
        </div>

        <div id="main-container">
          <div id="title">
            <h1>Create A New Tender</h1>
          </div>

          <div id="form">
            <form onSubmit={this.handleSubmit}>
              <div>
                <label htmlFor="title">Title : &nbsp;</label>
                <input
                  type="text"
                  id="title"
                  placeholder="Please enter title of the Tender"
                  required
                  value={this.state.title}
                  onChange={this.handleChange}
                />
              </div>
              <div>
                <label htmlFor="description">Description : &nbsp;</label>
                <input
                  type="text"
                  id="description"
                  placeholder="Please enter description of the Tender"
                  required
                  value={this.state.description}
                  onChange={this.handleChange}
                />
              </div>
              <div>
                <label htmlFor="image">Image : &nbsp;</label>
                <input
                  type="text"
                  id="image"
                  placeholder="Please enter URL of the image"
                  required
                  value={this.state.image}
                  onChange={this.handleChange}
                />
              </div>
              <div>
                <label htmlFor="creationDate">Creation Date : &nbsp;</label>
                <input
                  type="date"
                  id="creationDate"
                  placeholder="Please enter creation date of the Tender"
                  required
                  value={this.state.creationDate}
                  onChange={this.handleChange}
                />
              </div>
              <div>
                <label htmlFor="durationInDays">Duration In Days : &nbsp;</label>
                <input
                  type="number"
                  id="durationInDays"
                  placeholder="Please enter duration in days of the Tender"
                  required
                  value={this.state.durationInDays}
                  onChange={this.handleChange}
                />
              </div>
              <div>
                <label htmlFor="tenderPrice">Tender Price : &nbsp;</label>
                <input
                  type="number"
                  id="tenderPrice"
                  placeholder="Please enter tender price"
                  required
                  value={this.state.tenderPrice}
                  onChange={this.handleChange}
                />
              </div>
              <div style={{ marginLeft: "15px" }}>
                <input type="submit" value="Submit" />
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

export default createNewTender;
