import React, { Component } from 'react';
import './App.css';
import Movies from "./components/movies";


class App extends Component {
  render() {
    return (
        <main className="container m-2">
            <h2>Movie List </h2>
            <Movies/>
        </main>
    );
  }
}

export default App;
