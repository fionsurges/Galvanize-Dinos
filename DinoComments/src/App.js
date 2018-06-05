import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import JobDetails from "./components/JobDetails";
import Footer from "./components/Footer";
import InputForm from "./components/InputForm";
import Preview from "./components/Preview";

const apiURL = "./listing.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    fetch(apiURL)
      .then(response => response.json())
      .then(data => {
        this.setState({
          data: data
        });
      });
  }

  render() {
    return (
      <div className="App">
        <main>
          <Header />
          <JobDetails data={this.state.data} />
          <InputForm />
          <Preview />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
