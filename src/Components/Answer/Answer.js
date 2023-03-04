import React from 'react'

import profile from "../../Resources/images/Default_pfp.jpg";

function Answer() {
  return (
    <div>
      <div className="col-sm-9 col-md-8 col-lg-8 mx-auto mt-5 ">
        <h5 className="card-title fw-light fs-5 first-join fw-bold">
          Question <br /><br />
                  <h6>Whats react router dom</h6>
                  <h6>How does it work</h6>
        </h5>

        {/* Main question list wraper  */}
        <div className="question-outer-wraper">
          <hr />
          <h4>Answer From The Community</h4>
        </div>
        <div className="question-outer-wraper">
          <hr />
          <div className="question-main-wraper  row">
            <div className="question-inner-wrapper col-1 ">
              <img className="profile" src={profile} alt="pic" />
              <p className="name">Misrak</p>
            </div>

            <div className="question-inner-wrapper2 py-5 col-9">
              It uses for routing purpose
            </div>

            {/* Answer giving section  */}
            <section className="ask container row col-12 mb-5">
              <div className>
                <h5 className="title">Ask a public question</h5>
                <h6>Go to question page</h6>
                <form>
                  <div className="form-group"></div>
                  <br />
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1 question"
                      rows={5}
                      placeholder="Your Answer..."
                      defaultValue={""}
                    />
                  </div>
                  <div className="d-grid">
                    <button
                      className="btn btn-primary btn-login post-question-button col-sm-4 col-md-4 my-3"
                      type="submit"
                    >
                      Post your Answer
                    </button>
                  </div>
                </form>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Answer