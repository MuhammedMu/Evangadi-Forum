import React from 'react'
import footerimg from "../../Resources/images/evangadi-logo-footer-white.png"
import "./Footer.css"

function Footer() {
  return (
    <div>
      {" "}
      {/* Footer section  */}
      <footer className="container-fluid">
        <section className="row">
          <div className="first col-md-4">
            <div className="footer-logos">
              <a className="navbar-brand mx-5 px-2" href="/">
                <img src={footerimg} alt="" />
              </a>
              <div className="facebook"></div>
              <div className="logos mb-4">
                <i className="fab fa-facebook-f"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-youtube"></i>
              </div>
            </div>
          </div>
          <div className="second col-md-4">
            <ul>
              <h5>Useful Link</h5>
              <li>
                <a href="/">How it works</a>
              </li>
              <li>
                <a href="/">Term of Service</a>
              </li>
              <li>
                <a href="/">Privacy policy</a>
              </li>
            </ul>
          </div>
          <div className="third col-md-4">
            <ul>
              <h5>Contact Info</h5>
              <li>
                <a href='/'>Evangadi Networks</a>
              </li>
              <li>
                <a href='/'>support@evangadi.com</a>
              </li>
              <li>
                <a href='/'>+1-202-386-2702</a>
              </li>
            </ul>
          </div>
        </section>
      </footer>
    </div>
  );
}

export default Footer