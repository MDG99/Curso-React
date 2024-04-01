


const App = () => {
    const title = "mi titulo desde una constante"
    const classTitle = "text-center"
    const pathImg = "https://picsum.photos/200/300"
    
    return (
        // Más de un componente se tiene que devolver en un contenedor
        <>
            <h1 className={classTitle}>{title.toUpperCase()}</h1>
            <img src={pathImg} alt="" />
        </>
    )
}


// Exportamos
export default App;