import React, { Component } from "react";
import "./App.css";
import CardList from "./components/card-list/CardList.component.jsx";
import Searchbox from "./components/searchbox/Searchbox.component.jsx";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [], //Monsters Array
      searchField: ""
    };
  }
  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(
        (response) => response.json() //Converts response into JSON format
      )
      .then((users) => this.setState({ monsters: users }));
  }
  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className='App'>
        <h1 className='title'>Monsters Rolodex</h1>
        <Searchbox
          placeholder='Search for Monsters'
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
