import React, { Component } from "react";

class TableLatestSearch extends Component {
  render() {
    return (
      <table className="dataTab" styles="width: 100%;">
        <thead>
          <tr>
            <th>Date</th>
            <th>Supporting Notes</th>
            <th>Criteria</th>
            <th>Action</th>
            <th>Re Query</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>31-May-2018 13:31:10</td>
            <td>05 : a</td>
            <td>a</td>
            <td>
              <a tabindex="54" href="http://localhost:3000/view">
                View
              </a>
            </td>
            <td>
              <a href="http://localhost:3000/enquiry">Re-Query</a>
            </td>
          </tr>
          <tr>
            <td>31-May-2018 13:14:52</td>
            <td>05 : a</td>
            <td>aaa</td>
            <td>
              <a tabindex="46" href="http://localhost:3000/view">
                View
              </a>
            </td>
            <td>
              <a href="http://localhost:3000/enquiry">Re-Query</a>
            </td>
          </tr>
          <tr>
            <td>31-May-2018 12:13:49</td>
            <td>05 : a</td>
            <td>a</td>
            <td>
              <a tabindex="2" href="http://localhost:3000/view">
                View
              </a>
            </td>
            <td>
              <a href="http://localhost:3000/enquiry">Re-Query</a>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default TableLatestSearch;
