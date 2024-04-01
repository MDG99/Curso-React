
// Exportaciones nombradas. Al importar lo hacemos con el nombre entre corchetes {App} en el main
// export const App = () => {
//     return (<h1>Hola soy React</h1>)
// }
// import {App} from './App.jsx'


// const App = () => {
//     return (
//         // Más de un componente se tiene que devolver en un contenedor
//         <dv>
//             <h1 className="text-center"> Hola soy React</h1>
//             <img src="https://picsum.photos/200/300" alt="" />
//         </dv>
//     )
// }

// Si no queremos el div utilizamos algo llamado fragment, nos permite evitar agregar divs innecesarios
// No es necesartio importarlo pues se puede hacer con los tags vacíos <></>
import { Fragment } from "react";
const App = () => {
    return (
        // Más de un componente se tiene que devolver en un contenedor
        <Fragment>
            <h1 className="text-center"> Hola soy React</h1>
            <img src="https://picsum.photos/200/300" alt="" />
        </Fragment>
    )
}


// Exportamos
export default App;