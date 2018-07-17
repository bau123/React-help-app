import React, { Component, PropTypes } from "react";
import Modal from "react-responsive-modal";
import HelpIcon from "../../icon/questionmark.png";
import Button from "@govuk-react/button";
import Input from "@govuk-react/input";
import TextArea from "@govuk-react/text-area";
import RichTextEditor from "react-rte";
import $ from "jquery";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2
} from "react-html-parser";

class HelpEditable extends Component {
  componentWillMount() {
    this.state = {
      //Change to get he text from the real db instead of localStorage
      value: RichTextEditor.createValueFromString(
        localStorage.getItem(this.props.id),
        "html"
      ),
      open: false,
      helperID: this.helpID,
      openEditModal: false,
      editMode: false,
      customStyles: {
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          overlfow: "scroll" // <-- This tells the modal to scrol
        }
      },
      display: {
        body: ""
      },
      modalEditInfo: {
        body: ""
      }
    };
  }
  static propTypes = {
    onChange: PropTypes
  };
  onChange = value => {
    this.setState({ value });
    this.setState({
      modalEditInfo: {
        body: value.toString("html")
      }
    });
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  onOpenEditModal = () => {
    this.setState({ openEditModal: true });
  };

  onCloseEditModal = () => {
    this.setState({ openEditModal: false });
  };

  isEdit() {
    this.onCloseModal();
    this.onOpenEditModal();
  }

  getEditModal() {
    const { openEditModal } = this.state;
    return (
      <Modal
        open={openEditModal}
        onClose={this.onCloseEditModal}
        style={this.state.customStyles}
      >
        <br />
        <b> Enter help information:</b>
        <RichTextEditor value={this.state.value} onChange={this.onChange} />
        <Button onClick={this.saveHelp.bind(this)}> Save </Button>
      </Modal>
    );
  }

  //Change to send data to server and make it display to the help modal once sent
  saveHelp() {
    this.setState({
      display: {
        body: this.state.modalEditInfo.body
      }
    });
    console.log("saveHelp");
    this.sendData();
    this.onCloseEditModal();
    this.onOpenModal();
  }

  sendData() {
    console.log("sendData is running");
    let url = "http://www.deadlink.co.uk";
    //Make this the HTML
    let dataBody = {
      body: this.state.modalEditInfo
    };
    let _this = this;
    $.ajax({
      type: "POST",
      url: url,
      data: dataBody,
      success: function(msg) {
        alert("Data Saved: " + msg);
      },
      error: function(XMLHttpRequest, textStatus, errorThrown) {
        alert("request failed but attempting to run web data storage instead");
        if (typeof Storage !== "undefined") {
          localStorage.setItem(_this.props.id, _this.state.modalEditInfo.body);
          console.log(
            "The body of the modalEditInfo is: " +
              _this.state.modalEditInfo.body +
              " ID is: " +
              _this.props.id
          );
        } else {
          alert(
            "Cannot load local storage, the browswer does not support this."
          );
        }
      }
    });
  }

  getModal() {}
  render() {
    const { open } = this.state;
    return (
      <div>
        <img className="helpIcon" src={HelpIcon} onClick={this.onOpenModal} />
        <Modal
          open={open}
          onClose={this.onCloseModal}
          style={this.state.customStyles}
        >
          <br />
          <div className="HelpBody">
            {ReactHtmlParser(localStorage.getItem(this.props.id))}
          </div>
          <Button onClick={this.isEdit.bind(this)}>Edit</Button>
        </Modal>
        <div className="EditModal">{this.getEditModal()}</div>
      </div>
    );
  }
}

export default HelpEditable;
