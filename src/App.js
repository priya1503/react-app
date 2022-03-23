//import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import axios from "axios";

function App() {
  
  const[text,setText] = useState("");
  const[sentiment,setsentiment] = useState("");

  const clickHandler = async () =>{
    const obj={text :text};
    const res= await axios.post("/api/NLP-trigger",obj);
    setsentiment(res.data);
  }
  return (
    <div className="App">
      <h3>Sentiment Analysis of Paragraph</h3>
      <label for="inputText">Enter input Text</label>
      <br></br>
      <textarea id="inputText" rows="10" cols="50" value={text} onChange={(e) => setText(e.target.value)}></textarea>
      <br></br>
      <br></br>
      <button id="button" onClick={clickHandler}>Analyze</button>
      <h1 id="sentiment">{sentiment}</h1>
    </div>
  );
}

export default App;