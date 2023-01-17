import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom/client";
import { Saludar, UserCard, Saludar5 } from "./Saludar";
import Product, { Navbar } from "./Product";
import { Botton } from "./Botton";
import { TaskCard } from './Task'
import { Post } from "./Post";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Counter() {
  const [ mensaje, setMensaje ] = useState()

  useEffect(function() => {
    console.log('renter')
  })

  return (
    <div>
      <input onChange={e => setMensaje(e.target.value)} />
      <button onClick={() => {
        
      }}>
        Save
      </button>
    </div>
  )
}

root.render(
  <>
    <Counter />
  </>
);