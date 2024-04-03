import PropTypes from "prop-types"

const Button = ({text}) => {

    const handleClickButton = (title) => {
        console.log("Handle Click: " + title )
    }

    return(
        <button onClick={() => handleClickButton(text)}>{text}</button>
    )
}

// Le estamos diciendo que nuesto componente necesita el atributo text de tipo 
// string
Button.PropTypes = {
    text: PropTypes.string.isRequired
}


export default Button