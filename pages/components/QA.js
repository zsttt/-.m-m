import { useState, useEffect } from "react";
import Stack from './Stack';
import Image from 'next/Image'
import Celeb from './Celeb'
import Celebs from './people'
import HiLo from './HiLo'
import Hi from './HiLo' 

const QA = (props) => {

    const Celebo = p => <Celeb name={p.name}  age={p.age} img={p.img}/>
    const onlyy = p => p.age == "31"
    const onlyii = Celebs.filter(onlyy)
    const CelArr = Celebs.map(Celebo)
    

    const [question, setQ] = useState(1);
    const [attempts, setA] = useState(0);
    
    const inc_Q = () => {
        setQ(question+1)
    }

    const inc_A = () => {
        setA(attempts+1)
    }

    const [UserAnswer, setUser] = useState("");
    const [measureStat, setM] = useState("");

    function questionCheck(props) {
        if (UserAnswer == Celebs[question-1].age) {
            setQ(question+1);
            setA(attempts+1);
            setUser(12);
        }
        else {
            setA(attempts+1);
             if(UserAnswer < Celebs[question-1].age){
                setM("They are OLDER");
            }
            else {
                setM("They are YOUNGER");
            }
        }
    }

    return(

      
           
        <Stack>
            <HiLo name = {measureStat}/>
            <Hi name = {question}/>
            <div>{CelArr[question-1]} {Celebs[question-1].age}</div>
        <div> 
   
                <input
                    type="number"
                    value = {UserAnswer}
                    onChange = {(event) => setUser(event.target.value)} 
                    placeholder="Age Estimate"
                    className="w-52 p-2 border-2 border-gray-300 rounded mr-2/"> 
                </input>
 

                <button
                onClick = {questionCheck}
                class ="border bg-blue-500 hover:bg-blue-500 shadow-xl text-white font-bold rounded p-3">Guess!
                </button>
      
        <div>
            <span className ="p-2">Attempts: {attempts}</span>
            <span className = "p-2">Question {question}/8</span>
        </div>
        </div>
        </Stack>

   
    )
} 


export default QA