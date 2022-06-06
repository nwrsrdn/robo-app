import React, { Component } from "react";

import CardList from "../components/CardList";
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'

import './App.css';

// import { robots } from "./robots";

class App extends Component {
  constructor () {
    super();
    this.state = {
      robots: [],
      searchField: ''
    };
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value })
  }

  render () {
    const { robots, searchField } = this.state
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })

    let cardList

    if (typeof filteredRobots === 'undefined' || !filteredRobots.length) {
      cardList = <h1>Loading...</h1>
    } else {
      cardList = <CardList robots={ filteredRobots }/>
    }

    return (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox searchChange={ this.onSearchChange }/>
        <Scroll>
          { cardList }
        </Scroll>
      </div>
    );
  }

  componentDidMount () {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ robots: users}))
  }
}

export default App;