import React, { useState } from "react";
import swal from "sweetalert";

function UpdateTender() {
  const [formData, setFormData] = useState({
    tenderId: "",
    title: "",
    description: "",
    image: "",
    durationInDays: "",
    tenderPrice: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.tenderId) {
      swal({
        title: "",
        text: "Please enter a tender ID",
        icon: "warning",
      });
      return;
    }

    try {
      const response = await fetch(`http://localhost:8080/tenders/${formData.tenderId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to update tender");
      }

      const result = await response.json();
      swal({
        title: "",
        text: "Tender updated successfully",
        icon: "success",
      });

      // displayTenderData(result);
    } catch (error) {
      swal({
        title: "",
        text: "Tender update failed",
        icon: "error",
      });
    }
  };

  // const displayTenderData = (tender) => {
  //   Implement this function if needed
  // };

  return (
    <div>
      <div id="home">
        <a href="/admin">
          <span className="material-symbols-outlined"> home </span>
        </a>
      </div>

      <div id="main-container">
        <div id="title">
          <h1>Update Tender</h1>
        </div>

        <div id="form">
          <form onSubmit={handleSubmit}>
            {/* Form inputs */}
          </form>
        </div>

        <div>
          <div id="tender-data"></div>
        </div>
      </div>
    </div>
  );
}

export default UpdateTender;
