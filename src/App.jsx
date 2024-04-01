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
    const pathImg = "https://picsum.photos/200/300"
    const status = true

    return (
        // Más de un componente se tiene que devolver en un contenedor
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