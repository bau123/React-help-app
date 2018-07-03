import React, { Component } from "react";
import HelpIcon from "../../icon/questionmark.png";
import Modal from "react-responsive-modal";
import Table from "@govuk-react/table";
class HelpTable extends Component {
  componentWillMount() {
    this.state = {
      apiData: {
        text: [],
        bp: []
      },
      open: false,
      // showhelp: false,
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
        title: "Re-Query Helper",
        headers: ["First Name", "Second Name", "Info 1", "Info 2"],
        table: [
          ["Todd", "Rodd", "asfdafdgzvb", ""],
          ["Mike", "Hike", "three", "four"],
          ["Raul", "Paul", "", ""]
        ]
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

  help() {
    //make call to API for data here
    this.onOpenModal();
    this.getTableRows();
  }

  getTableRows() {
    var data = this.state[this.props.id].table;
    var row = [];
    var person;
    var tableRow = [];

    //How many table rows
    for (var i = 0; i < Object.keys(data).length; i++) {
      person = data[i];
      row.push(person.map(detail => <Table.Cell>{detail}</Table.Cell>));
    }
    const table = row.map(r => <Table.Row>{r}</Table.Row>);
    return table;
  }

  getTableHeaders() {
    var data = this.state[this.props.id];
    var row = [];
    for (var i = 0; i < data.headers.length; i++) {
      row.push(data.headers[i]);
    }
    const rowHeader = row.map(r => <Table.CellHeader>{r}</Table.CellHeader>);

    return rowHeader;
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
          <h2>Help for: {this.state[this.props.id].title}</h2>
          <Table
            head={<Table.Row>{this.getTableHeaders()}</Table.Row>}
            body={this.getTableRows()}
          />
        </Modal>
        <br />
      </div>
    );
  }
}
export default HelpTable;
