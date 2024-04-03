const ItemFruit = (props) => {
    const {index, text} = props
    return (
        <li key={index}>{text}</li>
    )
}

export default ItemFruit