import Celeb from '../components/Celeb'
const { config } = require('./people');
import Image from 'next/Image'
import Celebs from './people'
import QA from './QA'

const Game = () => {



    return (
        <div>
          

         <h1 className = "text-2xl font-sans font-bold bg-blue-700">Do you think you know how old people are?</h1>
        <span flex flex-row></span>
        <QA flex flex-row/>

            
              


        </div>
    )

};

export default Game;