import React from 'react'

function Header() {
  return (
    <div>
      <section>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand mx-5 px-2" href="/">
              <img
                src="https://www.evangadi.com/themes/humans//assets/images/misc/evangadi-logo-home.png"
                alt="evangadi logo"
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo02"
              aria-controls="navbarTogglerDemo02"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav me-auto mb-5 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    How it works
                  </a>
                </li>
                <li className="nav-item">
                  <button
                    className="btn btn-outline-success signin-button"
                    type="submit"
                  >
                    SIGN IN
                  </button>
                </li>
              </ul>
              
            </div>
          </div>
        </nav>
      </section>
    </div>
  );
}

export default Header