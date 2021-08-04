import './App.css';
import React, { useState } from 'react';
export default function App() {
const [username, setUsername] = useState("")

  return (
    <form>
      <h1>hellos {username}</h1>
      <p>Enter Namesx</p>
      <input type="text" onChange={e => setUsername(e.target.value)}></input>
    </form>
  )
}


