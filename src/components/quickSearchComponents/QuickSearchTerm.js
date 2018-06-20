import React, { Component } from "react";

class QuickSearchTerm extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <div className="QuickSearchTerms">
        <div className="form-group" id="searchTermsDiv">
          <label className="form-label" for="Search Terms">
            {" "}
            Search Terms{" "}
          </label>
          <input
            className="form-control"
            id="search"
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </div>
      </div>
    );
  }
}
export default QuickSearchTerm;
