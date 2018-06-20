import React, { Component } from "react";
import QuickReason from "./quickSearchComponents/QuickReason";
import QuickSearchTerm from "./quickSearchComponents/QuickSearchTerm";

class Quick extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="Quick">
        <QuickReason />
        <div className="QuickSearchTerm">
          <QuickSearchTerm />
        </div>
      </div>
    );
  }
}
export default Quick;
