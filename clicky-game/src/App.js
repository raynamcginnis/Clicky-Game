import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Score from "./components/Score";
import cats from "./cards.json";
import './App.css';

class App extends Component {
  // Setting this.state.cats to the cards json array
  state = {
    cats,
    clickedCatIds: [],
    score: 0,
    goal: 8,
    status: ""
  };

  //shuffle the pup cards in the browser when clicked
  shuffleScoreCard = id => {
    let clickedCatIds = this.state.clickedCatIds;

    if(clickedCatIds.includes(id)){
      this.setState({ clickedCatIds: [], score: 0, status:  "Game Over! You lost. Click to play again!" });
      return;
    }else{
      clickedCatIds.push(id)

      if(clickedCatIds.length === 8){
        this.setState({score: 8, status: "You Won! Great Job! Click to play again!", clickedCatIds: []});
        console.log('You Win');
        return;
      }

      this.setState({ cats, clickedCatIds, score: clickedCatIds.length, status: " " });

      for (let i = cats.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [cats[i], cats[j]] = [cats[j], cats[i]];
      }
    }
  }

  // Map over this.state.cards and render a Card component for each card object
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">The Clickster</h1>
          <p className="App-intro">
            Try not to click the same image twice!
          </p>
        </header>
        <Score total={this.state.score}
               goal={8}
               status={this.state.status}
               />
        <Wrapper>
          {this.state.cats.map(kitty => (
            <Card
              shuffleScoreCard={this.shuffleScoreCard}
              id={kitty.id}
              key={kitty.id}
              image={kitty.image}
            />
          ))}
        </Wrapper>
        <footer>
          <p> © Rayna McGinnis |<a href="https://raynamcginnis.github.io/Clicky-Game/" target="_blank" rel="noopener noreferrer"> View on Github</a>.</p>
        </footer>
    </div>
    );
  }
}

export default App;