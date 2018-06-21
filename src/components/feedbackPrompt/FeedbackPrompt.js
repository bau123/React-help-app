import React, { Component } from "react";

class FeedbackPrompt extends Component {
  render() {
    return (
      <div className="feedbackPrompt footer-content">
        <span>
          Is this page useful?
          <a className="feedbackLinks" href="http://localhost:3000/home#top">
            {" "}
            Yes
          </a>
          &nbsp;&nbsp;
          <a className="feedbackLinks" href="http://localhost:3000/home#top">
            {" "}
            No{" "}
          </a>
        </span>
        <a className="problemLink" href="https://www.gov.uk/contact/govuk">
          Is there anything wrong with this page?{" "}
        </a>
      </div>
    );
  }
}
export default FeedbackPrompt;
