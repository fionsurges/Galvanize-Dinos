import React, { Component } from "react"

class JobForm extends Component {

  constructor(props) {
    super(props)

    this.state = {
      title: '',
      pay: '',
      description: '',
      interested: []
    }
  }

  handleFormSubmission = (event) => {
    event.preventDefault()
    console.log(event.target.value)

    const newForm = {
      title: this.title.value,
      pay: this.pay.value,
      description: this.description.value,
      interested: []
    }

    this.props.submitForm(newForm)
    this.jobForm.reset()
  }



  render() {
    return (
      <aside id="side-bar">
        <h3>Add a Job</h3>
        <form ref={(form) => this.jobForm = form} onSubmit={this.handleFormSubmission} className="job-form" >
          <label htmlFor="title">Title</label>
          <input ref={(input) => this.title = input} type="text" name="title" />
          <label htmlFor="pay">Compensation</label>
          <input ref={(input) => this.pay = input} type="text" name="pay" />
          <label htmlFor="description">Description</label>
          <textarea ref={(input) => this.description = input} name="description" rows="8" cols="40"></textarea>
          <input type="submit" name="submit" value="Submit" />
        </form>
      </aside>
    );
  }
};


export default JobForm
