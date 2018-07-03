import React, { Component } from "react";
import $ from "jquery";
import HelpIcon from "../icon/questionmark.png";
class GetHelp extends Component {
  constructor() {
    super();
  }

  getHelp(helpID) {
    if (this.state.apiData === "") {
      console.log("No help data loaded, loading now");
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          var jsonResponse = JSON.parse(this.reponseText);
          this.setState({
            apiData: jsonResonse.helpText
          });
        } else {
          console.log("failed to receive data");
        }
      };
      xhttp.open("GET", "apiData.com/" + helpID, true);
      xhttp.send();
    }
  }

  getAPIDatajquery() {
    $.ajax({
      url: "https://jsonplaceholder.typicode.com/users",
      dataType: "json",
      cache: false,
      success: function(data) {
        this.setState(
          {
            apiData: data
          },
          function() {
            console.log(this.state);
          }
        );
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
      }
    });
  }
  componentWillMount() {
    this.state = {
      apiData: [],
      showhelp: false,
      id001: {
        text: ["example description of nothingness"],
        bp: [
          "To shewing another demands to.",
          "Marianne property cheerful informed at striking at"
        ]
      },
      ID002: {
        text: [
          "Received shutters expenses ye he pleasant.",
          "Drift as blind above at up"
        ],
        bp: [
          "No up simple county stairs do should praise as",
          "Man request adapted spirits set pressed",
          "Up to denoting subjects sensible feelings it indulged directly"
        ]
      },
      ID003: {
        text: [
          "Consider now provided laughter boy landlord dashwood. Often voice and the spoke. No shewing fertile village equally prepare up females as an. That do an case an what plan hour of paid. Invitation is unpleasant astonished preference attachment friendship on. Did sentiments increasing particular nay. Mr he recurred received prospect in. Wishing cheered parlors adapted am at amongst matters."
        ]
      },
      ID004: {
        option: ["something", "nothing", "asfdafdgzvb"],
        numbers: ["one", "two", "three", "four"],
        colour: ["red", "blue"]
      },
      ID005: "Help for ID005",
      ID006: "Help for ID006",
      ID007: "Help for ID007",
      ID008: "Help for ID008"
    };
  }

  showHelp() {
    this.setState({
      showhelp: !this.state.showhelp
    });
  }

  helper() {
    this.getHelp(this.props.helpID);
    this.showHelp();
  }
  render() {
    return (
      <div className="Help">
        <img
          className="helpIcon"
          src={HelpIcon}
          onClick={() => this.helper()}
        />
        <br />
        {this.state.showhelp ? (
          <div className="HelpHolder">
            <span> {this.state.apiData} </span>
          </div>
        ) : null}
      </div>
    );
  }
}
export default GetHelp;
