import React, { Component } from "react";

class FooterBorder extends Component {
  render() {
    return (
      <div>
        <footer className="footerBorder">
          <div className="footer">
            <a href="http://localhost:3000/home#top" className="back-to-top">
              .
            </a>
            <div className="footer-content">
              <div className="grid-row">
                <div className="column-two-thirds">
                  <h2 className="footerHeaders">Services and information </h2>
                  <div className="footerLists">
                    <ul className="list">
                      <li className="footerListItems">
                        <a
                          className="footerLinks"
                          href="http://localhost:3000/home#top"
                        >
                          Contact the Police
                        </a>
                      </li>
                      <li className="footerListItems">
                        <a
                          className="footerLinks"
                          href="http://localhost:3000/home#top"
                        >
                          Your neighbourhood
                        </a>
                      </li>
                      <li className="footerListItems">
                        <a
                          className="footerLinks"
                          href="http://localhost:3000/home#top"
                        >
                          Crime map
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="footerLists">
                    <ul className="list">
                      <li className="footerListItems">
                        <a
                          className="footerLinks"
                          href="http://localhost:3000/home#top"
                        >
                          Performance
                        </a>
                      </li>
                      <li className="footerListItems">
                        <a
                          className="footerLinks"
                          href="http://localhost:3000/home#top"
                        >
                          Information &amp; advice
                        </a>
                      </li>
                      <li className="footerListItems">
                        <a
                          className="footerLinks"
                          href="http://localhost:3000/home#top"
                        >
                          Environment and countryside
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="column-one-third">
                  <h2 className="footerHeaders">Departments and policy </h2>
                  <div className="footerLists">
                    <ul className="list">
                      <li className="footerListItems">
                        <a
                          className="footerLinks"
                          href="http://localhost:3000/home#top"
                        >
                          Drugs squad
                        </a>
                      </li>
                      <li className="footerListItems">
                        <a
                          className="footerLinks"
                          href="http://localhost:3000/home#top"
                        >
                          Economic Crime Unit/Detective
                        </a>
                      </li>
                      <li className="footerListItems">
                        <a
                          className="footerLinks"
                          href="http://localhost:3000/home#top"
                        >
                          Specialist Operations
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
export default FooterBorder;
