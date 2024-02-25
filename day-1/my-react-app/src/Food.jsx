function Food() {
    let food = [
        {
            name: "Burger",
            price: 10,
            description: "A hamburger is a sandwich consisting of one or more cooked patties of ground meat, usually beef, placed inside a sliced bread roll or bun."
        },
        {
            name: "Pizza",
            price: 15,
            description: "Pizza is a savory dish of Italian origin, consisting of a usually round, flattened base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients."
        },
        {
            name: "Pasta",
            price: 12,
            description: "Pasta is a type of food typically made from an unleavened dough of wheat flour mixed with water or eggs, and formed into sheets or other shapes, then cooked by boiling or baking."
        },
        {
            name: "Sandwich",
            price: 8,
            description: "A sandwich is a food typically consisting of vegetables, sliced cheese or meat, placed on or between slices of bread, or more generally any dish wherein bread serves as a container or wrapper for another food type."
        }
    ]

    return (
        <div>
            <h1>Food Menu</h1>
            <ul>
                {food.map((item, index) => {
                    return (
                        <li key={index}>
                            <h3>{item.name}</h3>
                            <p>Price: {item.price}</p>
                            <p>{item.description}</p>
                        </li>
                    )
                })}
            </ul>
            <hr />
        </div>
    )
}

export default Food