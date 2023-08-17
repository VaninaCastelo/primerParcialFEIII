import { useState } from 'react'
import './App.css'
import Card from './components/card'


function App() {


  return (
    <div className='App'>
    <h1>TAYLOR SWIFT PARTY</h1>
    <h2>The Eras Tour Edition</h2>
    <br />
    <p>Estamos confeccionando el playlist de la siguiente TS party, y queremos saber que canciones son tu MUST BE que no te pueden faltar</p>
    <Card/>
    
  </div>
  )
}

export default App
