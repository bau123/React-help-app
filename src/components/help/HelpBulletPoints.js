import React, { Component } from "react";
import HelpIcon from "../../icon/questionmark.png";
import Modal from "react-responsive-modal";
class HelpBulletPoints extends Component {
  componentWillMount() {
    this.state = {
      apiData: {
        text: [],
        bp: []
      },
      open: false,
      ID001: {
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

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  //pass in data from api call, store it

  apiCall() {
    if (this.state.apiData === "") {
      console.log("No help data loaded, loading now");
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          var jsonResponse = JSON.parse(this.reponseText);
        } else {
          console.log("failed to receive data");
        }
      };
      xhttp.open("GET", "apiData.com/", true);
      xhttp.send();
    }
  }

  loadData() {
    var data = this.state[this.props.id].text;
    var databp = this.state[this.props.id].bp;
    var arrayText = [];
    var arrayBP = [];
    for (var i = 0; i < data.length; i++) {
      arrayText.push(data[i]);
    }
    for (var z = 0; z < databp.length; z++) {
      arrayBP.push(databp[z]);
    }
    var apiData = {
      text: arrayText,
      bp: arrayBP
    };
    this.setState({ apiData: apiData }, function() {
      console.log(this.state);
    });
  }
  showHelp() {
    this.setState({
      showhelp: !this.state.showhelp
    });
  }
  diplayBulletPoints() {
    return this.state.apiData.bp.map(x => <li> {x} </li>);
  }

  displayText() {
    return this.state.apiData.text;
  }

  help() {
    this.loadData();
    this.onOpenModal();
  }
  render() {
    const { open } = this.state;
    return (
      <div className="Help">
        <img
          className="helpIcon"
          src={HelpIcon}
          onClick={this.help.bind(this)}
        />
        <Modal open={open} onClose={this.onCloseModal} center>
          <h2>Help</h2>
          <p>{this.displayText()}</p>
          <br />
          <ul>{this.diplayBulletPoints()}</ul>
        </Modal>
        <br />
      </div>
    );
  }
}
export default HelpBulletPoints;
