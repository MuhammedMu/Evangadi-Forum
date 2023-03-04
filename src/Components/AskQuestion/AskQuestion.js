import React from 'react'
import "./AskQuestion.css"

function AskQuestion() {
  return (
    <div>
      {/* discription title section  */}
      <section className="discription container-fluid">
        <div className="row">
          <div className="col-12">
            <h5>Steps to write good question</h5>
            <ul>
              <li>Sumerize your problem in one-line title.</li>
              <li>Describe your problem in more detail.</li>
              <li>Describe what you tried and what you expected to happen.</li>
              <li>Review your question and post it to the site.</li>
            </ul>
          </div>
        </div>
      </section>
      {/* Ask section  */}
      <section className="ask container row col-8 mb-5">
        <div className>
          <h5 className="title">Ask a public question</h5>
          <h6>Go to question page</h6>
          <form>
            <div className="form-group">
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1 title"
                rows={2}
                placeholder="Title"
                defaultValue={""}
              />
            </div>
            <br />
            <div className="form-group">
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1 question"
                rows={3}
                placeholder="Question Description..."
                defaultValue={""}
              />
            </div>
            <div className="d-grid">
              <button
                className="btn btn-primary btn-login post-question-button col-sm-2 col-md-4 my-3"
                type="submit"
              >
                Post your question
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default AskQuestion