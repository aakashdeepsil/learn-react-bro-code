import List from './List.jsx'

function App() {

  const foods = [
    {
      category : "fruits",
      items : [
        { name: "apple", calories: 95 },
        { name: "banana", calories: 105 },
        { name: "cherry", calories: 5 },
        { name: "date", calories: 25 },
        { name: "elderberry", calories: 5 },
      ],
    },
    {
      category : "vegetables",
      items : [
        { name: "artichoke", calories: 50 },
        { name: "beet", calories: 60 },
        { name: "carrot", calories: 25 },
        { name: "daikon", calories: 20},
        { name: "endive", calories: 15},
      ],
    },
    {
      category : "grains",
      items : [
        { name: "barley", calories: 270 },
        { name: "corn", calories: 365 },
        { name: "oats", calories: 124 },
        { name: "rice", calories: 205},
        { name: "wheat", calories: 651},
      ],
    },
  ];

  return (
    <>
      <h1>Food List</h1>
      {foods.map((food, index) => 
          food.category !== "grains" ? <List key={index} className="list" items={food.items} category={food.category}/> : null
      )}
    </>
  )
}

export default App
