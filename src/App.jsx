// Podemos importar usando vite. Nos trae el path

import { useState } from "react"


const App = () => {

    const [count, setCount] = useState(0)

    const handleClickDecrement = () => {
        setCount(count - 1)
    };

    const handleClickIncrement = () => {
        setCount(count + 1)
    };

    return (
            <div className="container mt-5 text-center">
                <div className="row justify-content-center">
                    <div className="col-5">
                        <h1>Counter {count}</h1>
                        <div className="d-grid gap-2">
                            <button
                                className="btn btn-outline-danger"
                                onClick={handleClickDecrement}
                                disabled={count === 0 && true}
                            >
                            Decrement
                            </button>
                            <button
                                className="btn btn-outline-primary"
                                onClick={handleClickIncrement}
                            >
                            Increment
                            </button>
                            <button
                                className="btn btn-outline-dark"
                                onClick={() => setCount(0)}
                            >
                            Reset
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            );
        
    };


// Exportamos
export default App;