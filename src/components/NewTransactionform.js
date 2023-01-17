import React, { useState } from "react";

// useState makes it possible to addnew items to our db.json file

function NewTransactionForm({ onSubmission }) {
  const [formData, setFormData] = useState({
    date: "",
    category: "",
    amount: 0,
    description: "",
  });

  //  events handling submission of new items, the name of the item that was added and e.preventDefault prevents the page from reloading/refreshing

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmission(formData);

    //   when a new item is added in the placeholder all the data gets cleared and the form remains blank
    setFormData({
      date: "",
      category: "",
      amount: 0,
      description: "",
    });
  }

  // {handleChange} & {handleSubmit} passed as a prop references to their functions for execution
  return (
    <form onChange={handleChange} onSubmit={handleSubmit} id="new-item form">
      <div className="form-inputs">
        <label htmlForm="date">Date</label>
        <input value={formData.date} name="date" id="date" />
        <input
          value={formData.description}
          name="description"
          className="text-input"
          type={"text"}
          placeholder="Description"
        />
        <input
          value={formData.category}
          name="category"
          className="text-input"
          type="text"
          placeholder="Category...."
        />
        <input value={formData.amount} placeholder="amount" type="number" />
      </div>
      <button className="btn">Click To Add New Transaction</button>
    </form>
  );
}

export default NewTransactionForm;
