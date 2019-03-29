import React from 'react';;

class QuestionBrowser extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className="container mt-4 center">
        <div className="pagination row">
          {
            this.props.questions.map((question, index) => (
              <li id={index} onClick={this.onChangeQuestion} className="page-link col-1">
                {index + 1}
              </li>
            ))
          }
        </div>
      </div>
    )
  }

  onChangeQuestion = (event) => {
    this.props.onChangeQuestion(event.target.id);
  }
}

export default QuestionBrowser;