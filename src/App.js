import React from 'react';
import './App.css';
import NavBar from './components/Navbar';
import QuoteCard from './components/QuoteCard';
import axios from 'axios';

let startSimpson = {
  character: 'Homer Simpson',
  image: 'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939',
  quote: `For once maybe someone will call me "sir" without adding, "You're making a scene.`
};

let oneQuoteUrl = `https://simpsons-quotes-api.herokuapp.com/quotes`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      simpson: startSimpson
    };
    this.getNewQuote = this.getNewQuote.bind(this);
  }

  getNewQuote(event) {
    console.log("click");
    axios.get(oneQuoteUrl)
      .then(function(response) { return response.data ;})
      .then(function(simpsonData) {

        this.setState({
          simpson: simpsonData[0],
        });

        console.log(simpsonData[0])
        
      }.bind(this));
  }
  
  render() {
    return (
      <div className="App">
        <NavBar />
        <button type="button" onClick={this.getNewQuote} className="btn btn-info">Click here to load a new quote !</button>
        <QuoteCard simpson={this.state.simpson}/>
      </div>
    );
  }
  
}

export default App;
