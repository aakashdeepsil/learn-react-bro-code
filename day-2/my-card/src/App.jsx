import Card from "./Card"

function App() {
  const animals = [
    {
        name: "Lion",
        description: "The lion is a species in the family Felidae; it is a muscular, deep-chested cat with a short, rounded head, a reduced neck and round ears, and a hairy tuft at the end of its tail."
    },
    {
        name: "Tiger",
        description: "The tiger is the largest species among the Felidae and classified in the genus Panthera. It is most recognisable for its dark vertical stripes on orange-brown fur with a lighter underside."
    },
    {
        name: "Elephant",
        description: "Elephants are mammals of the family Elephantidae and the largest existing land animals. Three species are currently recognised: the African bush elephant, the African forest elephant, and the Asian elephant."
    },
    {
        name: "Giraffe",
        description: "The giraffe is an African artiodactyl mammal, the tallest living terrestrial animal and the largest ruminant. It is traditionally considered to be one species, Giraffa camelopardalis, with nine subspecies."
    },
    {
        name: "Zebra",
        description: "Zebras are several species of African equids united by their distinctive black-and-white striped coats. Their stripes come in different patterns, unique to each individual."
    },
    {
        name: "Hippopotamus",
        description: "The common hippopotamus, or hippo, is a large, mostly herbivorous, semi-aquatic mammal and ungulate native to sub-Saharan Africa. It is one of only two extant species in the family Hippopotamidae."
    }
  ]
  
  return (
    animals.map((animal, index) => {
      return (
        <Card key={index} name={animal.name} description={animal.description} />
      )
    })
  )
}

export default App
