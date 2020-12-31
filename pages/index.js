import { useState, useEffect } from "react"; 
import  Game from '../pages/components/Game.js'
import Center from '../pages/components/Center.js'

const Home = () => {

  return (
    <Center>
      <div className = "flex flex-col text-center items-center bg-blue-200">
        Hello <Game />
      </div>     
    </Center>
  )
}

export default Home;