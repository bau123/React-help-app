import React, { Component } from "react";
import GetHelp from "../GetHelp";
class TableAllRecords extends Component {
  render() {
    return (
      <table className="dataTab" styles="width: 100%;">
        <thead>
          <tr>
            <th>Date</th>
            <th>Type</th>
            <th>Justificiation</th>
            <th>Title</th>
            <th>Action</th>
            <th>Re Query</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              31-May-2018 13:31:24
              <div className="ID002">
                <GetHelp />
              </div>
            </td>
            <td>Addresses</td>
            <td>05:a</td>
            <td>1</td>
            <td>
              <a tabindex="65" href="http://localhost:3000/view">
                View
              </a>
            </td>
            <td />
          </tr>
          <tr>
            <td>31-May-2018 13:31:23</td>
            <td>Addresses</td>
            <td>05:a</td>
            <td>1</td>
            <td>
              <a tabindex="64" href="http://localhost:3000/view">
                View
              </a>
            </td>
            <td />
          </tr>
          <tr>
            <td>31-May-2018 13:31:23</td>
            <td>PERSON_SUMMARY</td>
            <td>05:a</td>
            <td>1</td>
            <td>
              <a tabindex="63" href="http://localhost:3000/view">
                View
              </a>
            </td>
            <td />
          </tr>
          <tr>
            <td>31-May-2018 13:31:22</td>
            <td>SINGLE_PERSON</td>
            <td>05:a</td>
            <td>1</td>
            <td>
              <a tabindex="62" href="http://localhost:3000/view">
                View
              </a>
            </td>
            <td />
          </tr>
          <tr>
            <td>31-May-2018 13:31:20</td>
            <td>Markers</td>
            <td>a</td>
            <td>1</td>
            <td>
              <a tabindex="61" href="http://localhost:3000/view">
                View
              </a>
            </td>
            <td />
          </tr>
          <tr>
            <td>31-May-2018 13:31:19</td>
            <td>Markers</td>
            <td>a</td>
            <td>1</td>
            <td>
              <a tabindex="60" href="http://localhost:3000/view">
                View
              </a>
            </td>
            <td />
          </tr>
          <tr>
            <td>31-May-2018 13:31:17</td>
            <td>Markers</td>
            <td>a</td>
            <td>1</td>
            <td>
              <a tabindex="59" href="http://localhost:3000/view">
                View
              </a>
            </td>
            <td />
          </tr>
          <tr>
            <td>31-May-2018 13:31:16</td>
            <td>Markers</td>
            <td>a</td>
            <td>1</td>
            <td>
              <a tabindex="58" href="http://localhost:3000/view">
                View
              </a>
            </td>
            <td />
          </tr>
          <tr>
            <td>31-May-2018 13:31:16</td>
            <td>Markers</td>
            <td>a</td>
            <td>1</td>
            <td>
              <a tabindex="57" href="http://localhost:3000/view">
                View
              </a>
            </td>
            <td />
          </tr>
          <tr>
            <td>31-May-2018 13:31:14</td>
            <td>MENU</td>
            <td>05:a</td>
            <td>1</td>
            <td>
              <a tabindex="56" href="http://localhost:3000/view">
                View
              </a>
            </td>
            <td />
          </tr>
          <tr>
            <td>31-May-2018 13:31:14</td>
            <td>PERSON_SUMMARY</td>
            <td>05:a</td>
            <td>1</td>
            <td>
              <a tabindex="55" href="http://localhost:3000/view">
                View
              </a>
            </td>
            <td />
          </tr>
          <tr>
            <td>31-May-2018 13:31:10</td>
            <td>SEARCH</td>
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
            <td>SEARCH</td>
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
            <td>31-May-2018 12:14:02</td>
            <td>PERSON_SUMMARY</td>
            <td>05:a</td>
            <td>1</td>
            <td>
              <a tabindex="15" href="http://localhost:3000/view">
                View
              </a>
            </td>
            <td />
          </tr>
          <tr>
            <td>31-May-2018 12:14:01</td>
            <td>SINGLE_PERSON</td>
            <td>05:a</td>
            <td>1</td>
            <td>
              <a tabindex="14" href="http://localhost:3000/view">
                View
              </a>
            </td>
            <td />
          </tr>
        </tbody>
      </table>
    );
  }
}
export default TableAllRecords;
