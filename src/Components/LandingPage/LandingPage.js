import React from "react";

function LandingPage() {
  return (
    <div>
      

      {/* Login Section  */}
      <section className="login-section">
        <div className="container">
                  <div className="row">
                      
            {/* First Part */}
            <div className="col-sm-9 col-md-7 col-lg-6 mx-auto">
              <div className="card border-0 shadow rounded-3 my-5">
                <div className="card-body p-4 p-sm-5 all">
                  <h5 className="card-title text-center fw-light fs-5 first-join fw-bold">
                    Join the network
                  </h5>
                  <h6 className="card-title text-center mb-5 fw-light  ">
                    Already have an account? Sign in
                  </h6>
                  <form>
                    <div className="form-floating mb-3">
                      <input
                        type="email"
                        className="form-control"
                        id="floatingInput"
                        placeholder="name@example.com"
                      />
                      <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="login-flex">
                      <div className="form-floating mb-3">
                        <input
                          type="password"
                          className="form-control"
                          id="floatingPassword"
                          placeholder="Password"
                        />
                        <label htmlFor="floatingPassword">First Name</label>
                      </div>
                      <div className="form-floating mb-3 second">
                        <input
                          type="password"
                          className="form-control"
                          id="floatingPassword"
                          placeholder="Password"
                        />
                        <label htmlFor="floatingPassword">Last Name</label>
                      </div>
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        type="password"
                        className="form-control"
                        id="floatingPassword"
                        placeholder="Password"
                      />
                      <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <div className="form-check mb-3 text-center">
                      <label className="forget-password ">
                        I agree to the{" "}
                        <a href="https://www.evangadi.com/legal/privacy/">
                          privacy policy
                        </a>{" "}
                        and{" "}
                        <a href="https://www.evangadi.com/legal/terms/">
                          terms of service
                        </a>
                        .
                      </label>
                    </div>
                    <div className="d-grid">
                      <button
                        className="btn btn-primary btn-login login-button col-md-12"
                        type="submit"
                      >
                        Agree and join
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            {/* Second Part  */}
            <div className="col-sm-9 col-md-7 col-lg-6 mb-2 mx-auto">
              <div className="  my-5">
                <div className="card-body p-4 p-sm-5 all">
                  <h1 className="card-title fw-light  fw-bold evangadi-title">
                    Evangadi Networks Q&amp;A
                  </h1>
                  <h6 className="card-title  mb-4 fw-light login-description">
                    No matter what stage of life you are in, whether you’re just
                    starting elementary school or being promoted to CEO of a
                    Fortune 500 company, you have much to offer to those who are
                    trying to follow in your footsteps.
                  </h6>
                  <h6 className="login-description mb-5">
                    Wheather you are willing to share your knowledge or you are
                    just looking to meet mentors of your own, please start by
                    joining the network here.
                  </h6>
                  <div className="d-grid">
                    <button className="how-it-work-button">
                      <a href="https://www.evangadi.com/explained/">
                        HOW IT WORK
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer section  */}
      <footer className="container-fluid">
        <section className="row">
          <div className="first col-md-4">
            <a className="navbar-brand mx-5 px-2" href="/">
              <img
                src="https://www.evangadi.com/themes/humans//assets/images/misc/evangadi-logo-home.png"
                alt=""
              />
            </a>
          </div>
          <div className="second col-md-4">
            <ul>
              <h5>Useful Link</h5>
              <li>
                <a href>How it works</a>
              </li>
              <li>
                <a href>Term of Service</a>
              </li>
              <li>
                <a href>Privacy policy</a>
              </li>
            </ul>
          </div>
          <div className="third col-md-4">
            <ul>
              <h5>Contact Info</h5>
              <li>
                <a href>Evangadi Networks</a>
              </li>
              <li>
                <a href>support@evangadi.com</a>
              </li>
              <li>
                <a href>+1-202-386-2702</a>
              </li>
            </ul>
          </div>
        </section>
      </footer>
    </div>
  );
}

export default LandingPage;
