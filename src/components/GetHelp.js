import React, { Component } from "react";

class GetHelp extends Component {
  constructor() {
    super();
    this.myRef = React.createRef();
  }
  getHelp(helpID) {
    console.log("the helpID is: " + helpID);
    if (this.state.apiData === "") {
      console.log("No help data loaded, loading now");
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          console.log("load help place holder");
        } else {
          console.log("failed to receive data, dummy data here");
        }
      };
      xhttp.open("GET", "ajax_info.txt", true);
      xhttp.send();
      //this.props.compo("API help DATA here");
      this.setState({
        apiData: "Help me help me help me"
      });
    }
  }
  componentWillMount() {
    this.state = {
      apiData: ""
    };
  }

  showHelp() {
    //if(ReactDOM.findDOMNode(this.refs.myRef))
  }

  render() {
    return (
      <div className="Help">
        <a
          href="#"
          onClick={
            () => this.getHelp(this.props.helpID)
            //, this.showHelp()
          }
        >
          + help
        </a>
        <br />
        <span className="helpOn" ref={this.myRef}>
          {" "}
          {this.state.apiData}{" "}
        </span>
      </div>
    );
  }
}
export default GetHelp;
