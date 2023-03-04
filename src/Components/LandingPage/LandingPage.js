import React from "react";
import "./LandingPage.css"

function LandingPage() {

  const toLoginPage = (e) => {
   var element = document.getElementById("login");
    element.classList.add("hide");

    var element = document.getElementById("create");
    element.classList.remove("hide");
  }

  const toCreateAccount = () => {
    var element = document.getElementById("login");
    element.classList.toggle("hide");

    var element = document.getElementById("create");
    element.classList.add("hide");
  }
  


  return (
    <div className="landing">
      {/* Login Section  */}
      <section className="login-section">
        <div className="container">
          <div className="row">
            {/* First Part create account */}
            <div className="col-sm-9 col-md-7 col-lg-6 mx-auto " id="create">
              <div className="card border-0 shadow rounded-3 my-4">
                <div className="card-body p-4 p-sm-5 all">
                  <h5 className="card-title text-center fw-light fs-5 first-join fw-bold">
                    Join the network
                  </h5>

                  <h6 className="card-title text-center mb-3 fw-light  ">
                    Already have an account?
                    <span className="create-link" onClick={toCreateAccount}>
                      Sign in
                    </span>
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
                          type="email"
                          className="form-control"
                          id="floatingPassword"
                          placeholder="Password"
                        />
                        <label htmlFor="floatingPassword">First Name</label>
                      </div>
                      <div className="form-floating mb-3 second">
                        <input
                          type="email"
                          className="form-control"
                          id="floatingPassword"
                          placeholder="Password"
                        />
                        <label htmlFor="floatingPassword">Last Name</label>
                      </div>
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        className="form-control"
                        id="floatingInput"
                        placeholder="name@example.com"
                      />
                      <label htmlFor="floatingInput">User Name</label>
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
                    <div className="d-grid">
                      <button
                        className="btn btn-primary btn-login login-button col-md-12"
                        type="submit"
                      >
                        Agree and join
                      </button>
                    </div>
                    <br />
                    <div className="form-check mb-4 text-center">
                      <label className="forget-password ">
                        I agree to the{" "}
                        <a href="https://www.evangadi.com/legal/privacy/">
                          privacy policy
                        </a>
                        and
                        <a href="https://www.evangadi.com/legal/terms/">
                          terms of service
                        </a>
                        <br />
                        <span
                          className="create-link my-2"
                          onClick={toCreateAccount}
                        >
                          Alread have an account ?
                        </span>
                      </label>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* First part login  */}
            <div className="col-sm-9 col-md-7 col-lg-6 mx-auto hide" id="login">
              <div className="card border-0 shadow rounded-3 my-4">
                <div className="card-body p-4 p-sm-5 all">
                  <h5 className="card-title text-center fw-light fs-5 first-join fw-bold mb-4 mt-5 pt-2">
                    Login to your account
                  </h5>
                  <h6 className="card-title text-center mb-3 fw-light  ">
                    Don't have an account?
                    <span className="create-link" onClick={toLoginPage}>
                      Create an account ?{" "}
                    </span>
                  </h6>
                  <form>
                    <div className="form-floating mb-3">
                      <input
                        type="email"
                        className="form-control"
                        id="floatingInput"
                        placeholder="name@example.com"
                      />
                      <label htmlFor="floatingInput">Your Email </label>
                    </div>

                    <div className="form-floating mb-3">
                      <input
                        type="password"
                        className="form-control"
                        id="floatingPassword"
                        placeholder="Password"
                      />
                      <label htmlFor="floatingPassword">Your Password</label>
                    </div>

                    <div className="d-grid">
                      <button
                        className="btn btn-primary btn-login submit-button col-md-4"
                        type="submit"
                      >
                        Submit
                      </button>
                      <div className="form-check mb-3 text-center">
                        <label className="forget-password mt-3">
                          <span className="create-link" onClick={toLoginPage}>
                            Create an account ?{" "}
                          </span>
                        </label>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* Second Part  */}
            <div className="col-sm-9 col-md-7 col-lg-6 mb-2 mx-auto">
              <div className="  my-5">
                <div className="card-body p-4 p-sm-5 all">
                  <div className="about-link">About</div>
                  <h2 className="card-title fw-light  fw-bold evangadi-title">
                    Evangadi Networks Q&amp;A
                  </h2>
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
    </div>
  );
}

export default LandingPage;
