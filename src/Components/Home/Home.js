import React from "react";
import "./Home.css";
import profile from "../../Resources/images/Default_pfp.jpg";
function Home() {
  return (
    <div>
      <div className="col-sm-9 col-md-8 col-lg-8 mx-auto ">
        <div className="home-header my-5">
          <div>
            <button
              className="btn btn-outline-success ask-question-button"
              type="submit"
            >
              Ask Question
            </button>
          </div>
          <div className="home-welcome">Welcome: Group 2</div>
        </div>
        <h5 className="card-title fw-light fs-5 first-join fw-bold">
          Questions
              </h5>
              
              {/* Main question list wraper  */}
        <div className="question-outer-wraper">
          <hr />
          <div className="question-main-wraper  row">
            <div className="question-inner-wrapper col-1 ">
              <img className="profile" src={profile} alt="pic" />
              <p className="name">Misrak</p>
            </div>

            <div className="question-inner-wrapper2 py-5 col-9">
              Git gin menden nw?
            </div>

            <div className="right py-5 col-1"></div>
          </div>
        </div>
        <div className="question-outer-wraper">
          <hr />
          <div className="question-main-wraper  row">
            <div className="question-inner-wrapper col-1 ">
              <img className="profile" src={profile} alt="pic" />
              <p className="name">Misrak</p>
            </div>

            <div className="question-inner-wrapper2 py-5 col-9">
              Git gin menden nw?
            </div>

            <div className="right py-5 col-1"></div>
          </div>
              </div>
              
      </div>
    </div>
  );
}

export default Home;
