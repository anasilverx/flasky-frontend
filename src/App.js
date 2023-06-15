// import logo from './logo.svg';
import './App.css';
// import Animal from './components/Animal';
import AnimalList from './components/AnimalList';

const listOfAnimals = [
  {
    id: 0,
    name: "Samson",
    species: "tabby cat",
    photo: 'https://placekitten.com/g/200/200'
  },
  {
    id: 1,
    name: "Norman",
    species: "Pyrenese puppy",
    photo: 'https://images.dog.ceo/breeds/pyrenees/n02111500_1474.jpg'
  },
  {
    id: 2,
    name: "Juni",
    species: "Poodle",
    photo: 'https://images.dog.ceo/breeds/poodle-toy/n02113624_223.jpg'
  },
  {
    id: 3,
    name: "Bobi"
  }
];

function App() {
  return (
    <section>
      <h1>The Sapphire Animal Adoption Agency</h1>
      <AnimalList listOfAnimals={ listOfAnimals }></AnimalList>
    </section>
  );
}

export default App;
