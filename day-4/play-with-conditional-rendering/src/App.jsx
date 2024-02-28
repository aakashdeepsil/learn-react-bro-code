import List from './List.jsx'

function App() {
  const fruits = [
    { name: "apple", calories: 100 },
    { name: "banana", calories: 50 },
    { name: "cherry", calories: 200 },
    { name: "date", calories: 300},
    { name: "elderberry", calories: 150},
  ];

  return (
    <List fruits={fruits}/>
  )
}

export default App
