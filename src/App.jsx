// Podemos importar usando vite. Nos trae el path
import imgUno from './assets/images/img-1.jpeg'

// los componentes siempre van en mayúscula
const Button = () => {
    return(
        <button>I 'am a button</button>
    )
}

const OnlineMessage = () => {
    return (
        <h2>Tú estás online</h2>
    )
}

const OfflineMessage = () => {
    return (
        <h2>Tú estás offline</h2>
    )
}

const App = () => {
    const title = "mi titulo desde una constante"
    const classTitle = "text-center"
    // El relative path empieza desde el src
    // const pathImg = "src/assets/images/img-1.jpeg"
    const pathImg = imgUno
    const status = false

    return (
        // Más de un componente se tiene que devolver en un contenedor
        // Los componentes se pueden reutilizar las veces que uno quiera
        <>
            <h1 className={classTitle}>{title.toUpperCase()}</h1>
            <img src={pathImg} alt="" />
            <Button/>
            {
                // Solo el if sin el Else, se utiliza el operador &&
                status && <OnlineMessage/> 
            }
        </>
    )
}


// Exportamos
export default App;