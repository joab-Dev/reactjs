import React from 'react'
import './App.css'
import Recipe from './compenents/Recipe';
import Header from './compenents/Header';
function App() {
  const name = "John";
  return (
    <>
    <div className='react'>welcome to react class <strong>{name}</strong> </div>
    <Recipe/>
    <Header/>
      </>
  )
}

export default App