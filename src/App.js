// create your App component here
import React, {Component} from 'react'

export default class App extends Component {
    state = {
        peopleInSpace: []
    }

    render(){
        return(
        <div>
            {this.state.peopleInSpace.map((person, id) => <li key={id}>{person.name}</li>)}
        </div>)
    }

    componentDidMount(){
        fetch('http://api.open-notify.org/astros.json')
            .then(resp => resp.json())
            .then(({people}) => this.setState({ peopleInSpace: people }))    }
}