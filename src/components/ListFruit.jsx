import ItemFruit from "./ItemFruit"

const ListFruit = ({ fruits }) => {
    //const fruits = ["🍏", "🍉", "🍇", "🍋"]

    return (<ul>
        {
            fruits.map((fruit, index) => {
                //return (<li key={index}>{fruit} - {index}</li>)
                return <ItemFruit key={index} text={fruit}/>
            })
        }
    </ul>
    )
}

export default ListFruit;