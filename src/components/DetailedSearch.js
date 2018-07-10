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
        <GetHelp helpID="ID001" className="HelpMark" />
      </div>
    );
  }
}
export default DetailedSearch;
