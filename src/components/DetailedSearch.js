import React, { Component } from "react";
import HelpEdit from "./help/HelpEditable";

class DetailedSearch extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="DetailedSearch">
        <a href="http://localhost:3000/enquiry">Use More Criteria</a>
        <br />
        <div className="HelpMark">
          <HelpEdit helpID="ID001" />
        </div>
      </div>
    );
  }
}
export default DetailedSearch;
