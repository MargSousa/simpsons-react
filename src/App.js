import React from 'react';
import './App.css';
import NavBar from './components/Navbar';
import QuoteList from './components/QuoteList';

function App() {
  return (
    <div className="App">
      <NavBar />
      <QuoteList />
    </div>
  );
}

export default App;
