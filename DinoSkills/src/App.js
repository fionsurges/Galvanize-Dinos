import React, { Component } from 'react'
import './App.css'

import Header from "./components/Header"
import Footer from "./components/Footer"
import Profiles from "./components/Profiles"
import Skills from "./components/Skills"

const apiURL = "./dinosaurs.json"

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      data : []
    }
  }

componentDidMount() {
  fetch(apiURL)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      this.setState({
        data: data
      })
    })
}

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Profiles data={this.state.data} />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App
