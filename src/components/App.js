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

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Header">
          <Header />
        </div>
        <div className="HomeMain">
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
