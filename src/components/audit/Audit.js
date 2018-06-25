import React, { Component } from "react";
import TableLatestSearch from "./TableLatestSearch";
import TableAllRecords from "./TableAllRecords";
import GetHelp from "../GetHelp";

class Audit extends Component {
  render() {
    return (
      <div className="Audit">
        <div id="newSection" />
        <h3> Latest searches </h3>
        <br />
        <div className="Help" />
        <div className="TableLatestSearch">
          <TableLatestSearch />
        </div>
        <br />
        <h3> All Records </h3>
        <div className="TableAllReacords">
          <TableAllRecords />
        </div>
      </div>
    );
  }
}
export default Audit;
