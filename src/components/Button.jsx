const Button = ({text}) => {

    const handleClickButton = (title) => {
        console.log("Handle Click: " + title )
    }

    return(
        <button onClick={() => handleClickButton(text)}>{text}</button>
    )
}

export default Button