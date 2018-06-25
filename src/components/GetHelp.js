import React, { Component } from "react";

class GetHelp extends Component {
  constructor() {
    super();
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
      //pass in help from api into apiData
      this.setState({
        apiData: "This is the detailed search bar!!!"
      });
    }
    console.log("apiData is: " + this.state.apiData);
  }
  componentWillMount() {
    this.state = {
      apiData: "",
      showhelp: false
    };
    //this.myRef = React.createRef();
  }

  showHelp() {
    this.setState({
      showhelp: !this.state.showhelp
    });
  }

  helper() {
    this.showHelp();
    this.getHelp(this.props.helpID);
  }
  render() {
    return (
      <div className="Help">
        <a href="#" onClick={() => this.helper()}>
          + help
        </a>
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
