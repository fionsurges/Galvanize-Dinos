import React, { Component } from "react";
import "./App.css";

import Header from "./components/Header";
import Listings from "./components/Listings"
import JobForm from "./components/JobForm"
import Footer from "./components/Footer"

const apiUrl = "./listings.json"

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      data : []
    }
    this.submitForm = this.submitForm.bind(this)
  }

componentDidMount() {
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => { 
      console.log(data)
      this.setState ({
        data: data 
      })
    })
}

submitForm(formData) {
    const newData = this.state.data

    newData.push(formData)

    this.setState({data: newData})
}

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Listings  jobs={this.state.data} />
          <JobForm submitForm={this.submitForm} />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
