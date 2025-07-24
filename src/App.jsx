import React from 'react';  
import Quote from './components/Quote';
import Author from './components/Author';
import Button from './components/Button';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Quotes</h1>
      </header>
      <div className="App-content">
      <p><Quote /></p>
      <p><Author /></p>
      <p><Button /></p>
      </div>
    </div>
  );
}

export default App;

//GET /api/quotes/random
//https://github.com/lukePeavey/quotable
//const searchByName = (e) => {
//  e.preventDefault();
//  const response = await axios.get(`/api/quotes?author=${name}`);
//  setQuotes(response.data);
//  setName('');
//};