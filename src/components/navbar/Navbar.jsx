import "./navbar.css"
import {useState} from 'react'

export default function SearchAppBar({onSet}){
  const [input, setInput] = useState('india');
  
  return (
    <div className="news__navbar">
  <div className="news__navbar-links">
    <div className="news__navbar-links_logo">
      <h1>DailyBuggle</h1>
    </div>

  </div>
  <div className="news__navbar-inputs">
    <input 
    type="text" 
    name="term" 
    value={input} 
    onChange = {e => setInput(e.target.value)}
    onKeyPress = { e => e.key === 'Enter' && onSet(input)}
    placeholder="Search..."/>
    <button 
    type="buttom"
    onClick = {() =>{onSet(input)}}
    >Search</button>
  </div>
</div>
    );
}