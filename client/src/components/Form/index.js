import React from "react";
import "./style.css";

function Form(props){
return (
  <div className="container">
  <form>
    <div className="form-group">
      <label htmlFor="search"><h2>Book Search</h2></label>
      <input
        onChange={props.handleInputChange}
        value={props.search}
        name="search"
        type="text"
        className="form-control"
        placeholder="Search for a Book"
        id="search"
      />
      <button onClick={props.handleFormSubmit} className="btn btn-dark mt-2 mb-2">
        Search
        </button>
    </div>
  </form>
  </div>
);
}

export default Form;
