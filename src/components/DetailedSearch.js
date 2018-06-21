import React, { Component } from "react";
import GetHelp from "./GetHelp";

class DetailedSearch extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="DetailedSearch">
        <a href="http://localhost:3000/enquiry">Use More Criteria</a>
        <br />
        <GetHelp helpID="detailedsearch" />
      </div>
    );
  }
  displayHelp() {}
}
export default DetailedSearch;
