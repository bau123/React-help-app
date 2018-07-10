import React, { Component } from "react";
import "../styles/App.css";
import "../styles/style1.css";
import "../styles/style2.css";
import "../styles/fontStyle.css";
import "../styles/style3.css";
import Header from "./Header";
import Quick from "./quickSearchComponents/Quick";
import DetailedSearch from "./DetailedSearch";
import Audit from "./audit/Audit";
import FeedbackPrompt from "./feedbackPrompt/FeedbackPrompt";
import FooterBorder from "./footerBorder/FooterBorder";
import TabTest from "./tabs/TabTest";
import HelpActivator from "../icon/questionmark.png";
import ReactDOM from "react-dom";

class App extends Component {
  componentWillMount() {
    this.state = {
      isHelp: false
    };
  }
  showHelp() {
    let help = document.getElementsByClassName("HelpMark");
    if (!this.state.isHelp) {
      console.log("False");
      for (var i = 0; i < help.length; i++) {
        help[i].style.visibility = "visible";
      }
      this.setState({
        isHelp: true
      });
    } else {
      console.log("True");
      for (var i = 0; i < help.length; i++) {
        help[i].style.visibility = "hidden";
      }
      this.setState({
        isHelp: false
      });
    }
  }

  render() {
    return (
      <div className="App">
        <div className="Header">
          <Header />
        </div>
        <div className="HomeMain">
          <img
            className="HelpActivator"
            src={HelpActivator}
            onClick={this.showHelp.bind(this)}
          />
          <div className="Quick">
            <Quick />
          </div>
          <div className="DetailedSearch">
            <DetailedSearch />
          </div>
          <div className="Audit">
            <Audit />
          </div>
          <div>
            <TabTest />
          </div>
          <div />
        </div>
        <div className="feedback">
          <FeedbackPrompt />
        </div>
        <div className="footer">
          <FooterBorder />
        </div>
      </div>
    );
  }
}

export default App;
