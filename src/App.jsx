
// Exportaciones nombradas. Al importar lo hacemos con el nombre entre corchetes {App} en el main
// export const App = () => {
//     return (<h1>Hola soy React</h1>)
// }
// import {App} from './App.jsx'


const App = () => {
    return (
        // Más de un componente se tiene que devolver en un contenedor
        <dv>
            <h1 className="text-center"> Hola soy React</h1>
            <img src="https://picsum.photos/200/300" alt="" />
        </dv>
    )
}

// Exportamos
export default App;