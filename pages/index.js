import { useState, useEffect } from "react"; 
import  Game from '../pages/components/Game.js'
import Center from "../pages/components/Center.js";
import Stack from "../pages/components/Stack.js";
import  Celebs from '../pages/components/Celeb';

import Image from 'next/Image';

// const [playStatus, setP] = useState(false);

// const playing = () {
//   if ()
// }


const Home = () => {

  return (
    <Center bg-red-200>
      <Stack>
        <Game />
      </Stack>     
    </Center>
  )
}

export default Home;