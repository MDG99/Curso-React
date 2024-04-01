// Podemos importar usando vite. Nos trae el path
import imgUno from './assets/images/img-1.jpeg'

// los componentes siempre van en mayúscula
const Button = () => {
    return(
        <button>I 'am a button</button>
    )
}

const App = () => {
    const title = "mi titulo desde una constante"
    const classTitle = "text-center"
    const pathImg = imgUno
    const fruits = ["🍏", "🍉", "🍇", "🍋"]

    return (
        // Más de un componente se tiene que devolver en un contenedor
        // Los componentes se pueden reutilizar las veces que uno quiera
        <>
            <h1 className={classTitle}>{title.toUpperCase()}</h1>
            <img src={pathImg} alt="" />
            <Button/>
            <ul>
                {
                    fruits.map((fruit, index) => {
                        return (<li key={index}>{fruit} - {index}</li>)
                    })
                }
            </ul>
        </>
    )
}


// Exportamos
export default App;