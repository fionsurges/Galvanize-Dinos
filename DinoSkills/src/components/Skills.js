import React, { Component } from "react"

class Skills extends Component {

    constructor(props) {
        super(props)
        this.state = {
            showSkills: false
        }
        console.log("props: ", this.props)
    }

    logClick = (event) => {
        event.preventDefault()
        this.setState({
            showSkills: !this.state.showSkills
        })

        console.log("state: ", this.state)
    }

    render() {
        return (
            <li>
                <div className="profile-card">
                    <header onClick={this.logClick} className="profile-header">
                        <img src={this.props.image} />
                        <h2>{this.props.name}</h2>
                    </header>
                    {this.state.showSkills ? (<section className="skills-container">
                        <h4>Skills</h4>
                        <ul className="skills-list">
                            {this.props.skills.map(skill => <li>{skill}</li>)}
                        </ul>
                    </section>) : (null)}
                </div>
            </li>
        )
    }
}



export default Skills
