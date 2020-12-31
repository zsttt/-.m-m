import { useState } from "react";

const Game = () => {

    const [b, setB] = useState(true);

    const inc_b = () => {
        setB(!b);
    };

    let dispB
    if(b == true) {
        dispB = "yuh is true";
    }
    else {
        dispB = "fglejilfe";
    }


    return (
        <div
            onClick={inc_b}>b: {dispB}
        </div>
    )

};

export default Game;