import React from "react";
import Logo from "../../../images/Rick_and_Morty_-_logo.png";
import "./_footer.scss";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="wrapper">
          <div className="footer__logo">
            <img src={Logo} alt="Rick and Morty Search" />
          </div>
          <div className="footer__copy">
            <h5>
              <a
                href="https://github.com/masopego"
                target="_blank"
                rel="noopener noreferrer"
              >
                masopego
              </a>
              &copy; 2020
            </h5>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
