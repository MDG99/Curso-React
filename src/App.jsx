// Podemos importar usando vite. Nos trae el path
import imgUno from './assets/images/img-1.jpeg'
import PropTypes from "prop-types"
import Button from "./components/Button"


const ItemFruit = (props) => {
    const {index, text} = props
    return (
        <li key={index}>{text}</li>
    )
}
// Le estamos diciendo que nuesto componente necesita el atributo text de tipo 
// string
Button.PropTypes = {
    text: PropTypes.string.isRequired
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
            <Button text="botón 1"/>
            <Button text="botón 2"/>
            <Button text="botón 3"/>
            <ul>
                {
                    fruits.map((fruit, index) => {
                        //return (<li key={index}>{fruit} - {index}</li>)
                        return <ItemFruit key={index} text={fruit}/>
                    })
                }
            </ul>
        </>
    )
}


// Exportamos
export default App;