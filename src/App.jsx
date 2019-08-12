import React from 'react'
import './App.scss'
import Header from './components/Header/Header'
import MoleContainer from './components/MoleContainer/MoleContainer'
import Leaderboard from './components/Leaderboard/Leaderboard'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content-container">
        <MoleContainer />
        <Leaderboard />
      </div>
      <Footer />
    </div>
  )
}

export default App
