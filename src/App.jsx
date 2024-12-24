import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import PlayersList from "./components/PlayersList";

function App() {
  

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <h1 className="text-4xl text-center font-bold mb-10">FIFA Player Cards</h1>
      <PlayersList />
    </div>
  )
}

export default App
