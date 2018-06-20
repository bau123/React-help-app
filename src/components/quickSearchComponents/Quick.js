import React, { Component } from "react";
import QuickReason from "./QuickReason";
import QuickSearchTerm from "./QuickSearchTerm";
import Search from "./Search";

class Quick extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="QuickEnquiry">
        <QuickReason />
        <div className="QuickSearchTerm">
          <QuickSearchTerm />
        </div>
        <div className="Search">
          <Search />
        </div>
      </div>
    );
  }
}
export default Quick;
