import React from 'react';
import './AnimalList.css';
import Animal from './Animal';
import PropTypes from 'prop-types'

// const AnimalList = ( {listOfAnimals }) => {} this is the destructuring, get props out of props object (this is destructuring)
const AnimalList = (props) => {
    const {listOfAnimals} = props
    // const listOfAnimals = props.listOfAnimals;  this line is long hand 

  const renderedAnimalsForLoops = [];
  for (const creature of listOfAnimals) {
    renderedAnimalsForLoops.push(
      <li>
        <Animal name={creature.name} species={creature.species}></Animal>
      </li>
    )
  }
  // const renderedAnimals = listOfAnimals.map( ({ name, species }) => (
    // <li><Animal name={ name } species={ species }/></li>
    // ));  more destructuring here 
    // const renderedAnimals = listOfAnimals.map(creature => (
    //   <li><Animal {...creatures}}/></li> spread operator here 
    // ));

  const renderedAnimals = listOfAnimals.map(creature => (
    <li><Animal name={creature.name} species={creature.species} photo={creature.photo}/></li>
  ));

  console.log({renderedAnimals});

  return (
      <section className='AnimalList'>
        <h2>Animal List</h2>
        <ul>
          {/* { renderedAnimals } rendered expression, but embedded expression below is better*/} 
          { 
            listOfAnimals.map(creature => (
            <Animal key={creature.id} name={creature.name} species={creature.species} photo={creature.photo}/>
            )) 
          }
        </ul>
      </section>
    )
};

AnimalList.propTypes = {
  listOfAnimals : PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      species: PropTypes.string.isRequired,
      adopted: PropTypes.bool,
      age: PropTypes.number,
      photo: PropTypes.string
    })
  )
}

export default AnimalList;