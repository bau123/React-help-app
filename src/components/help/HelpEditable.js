import React, { Component, PropTypes } from "react";
import Modal from "react-responsive-modal";
import HelpIcon from "../../icon/questionmark.png";
import Button from "@govuk-react/button";
import Input from "@govuk-react/input";
import TextArea from "@govuk-react/text-area";
import RichTextEditor from "react-rte";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2
} from "react-html-parser";

class HelpEditable extends Component {
  componentWillMount() {
    this.state = {
      value: RichTextEditor.createEmptyValue(),
      open: false,
      openEditModal: false,
      editMode: false,
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
    // if (this.props.onChange) {
    //   // Send the changes up to the parent component as an HTML string.
    //   // This is here to demonstrate using `.toString()` but in a real app it
    //   // would be better to avoid generating a string on each change.
    //   this.props.onChange(value.toString("html"));
    // }
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
    console.log("Trying to open edit modal");
  }

  getEditModal() {
    const { openEditModal } = this.state;
    return (
      <Modal open={openEditModal} onClose={this.onCloseEditModal} center>
        <br />
        <br />
        <br />
        <b> Enter help information:</b>
        <br />
        <RichTextEditor value={this.state.value} onChange={this.onChange} />
        <Button onClick={this.saveHelp.bind(this)}> Save </Button>
      </Modal>
    );
  }

  //Change to send data to server and make it display to the help modal once sent
  saveHelp() {
    console.log("The state of the body: " + this.state.modalEditInfo.body);
    this.setState({
      display: {
        body: this.state.modalEditInfo.body
      }
    });
    this.onCloseEditModal();
    this.onOpenModal();
  }

  getModal() {}
  render() {
    const { open } = this.state;

    return (
      <div>
        <img className="helpIcon" src={HelpIcon} onClick={this.onOpenModal} />
        <Modal open={open} onClose={this.onCloseModal} center>
          <br />
          <div className="HelpBody">
            {ReactHtmlParser(this.state.display.body)}
          </div>
          <Button onClick={this.isEdit.bind(this)}>Edit</Button>
        </Modal>
        <div className="EditModal">{this.getEditModal()}</div>
      </div>
    );
  }
}

export default HelpEditable;
