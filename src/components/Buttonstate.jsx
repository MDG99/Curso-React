import { useState } from "react";

const ButtonState = () => {

    //let counter = 0;

    //const arrayState = useState(0)
    // El useState nos devuelve un array con dos valores: el valor actual y una función para realizar
    // el cambio del mismo, así estdo puede provocar la renderización del butón
    //const arrayValue = arrayState[0]
    //const arrayFunction = arrayState[1]

    const [count, setCount] = useState(0)

    const handleClick = () => {
        // Esto no funciona solo así, ya que React no vuelve a renderizar el componente
        //counter += 1
        //console.log("Handle Click")
        //arrayFunction(arrayValue + 1)
        setCount(count + 1)

    }

    return(
        //<button onClick={() => handleClick()}>ButtonState {counter}</button>
        //<button onClick={() => handleClick()}>ButtonState {arrayState}</button>
        <button onClick={() => handleClick()}>ButtonState {count}</button>
    )
}

export default ButtonState