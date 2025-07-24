import React, {useState} from "react";
import axios from 'axios';
import Quote from './Quote';
import Author from './Author';

function Button() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const fetchNewQuote = async () => {
    const response = await axios.get('https://quoteslate.vercel.app/api/quotes/random');
    setQuote(response.data.quote);
    setAuthor(response.data.author);
  };

  return (
    <div className="App">
        <Quote quote={quote} />    
        <Author author={author} />
         <div className="Button">
            <button onClick={fetchNewQuote}>Next Quote</button>
        </div>
    </div>
  )
};

export default Button;