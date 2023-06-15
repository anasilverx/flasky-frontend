import React from 'react';
import './Animal.css';
import PropTypes from 'prop-types';
import { useState } from 'react';
// run yarn add prop-types first

// Make an element that the user inteacts with
// make an event handler for that element
// configure a piece of state:
// - decide what the sate is .. what is its name, what is its type, what are the available values for this
// - render the piece of state with an initial value
// - make the event hander udpate the state
// test it
// style it 
const Animal = (props) => {

    const [isBookmarked, setIsBookmarked] = useState(false);

    const altText = `Photo of ${props.name}`;
    
    const toggleBookmark = () => {
        setIsBookmarked(!isBookmarked);
    }
    // if animal is bookmarked, the css class name should be .bookmarked
    // if the animal is NOT bookmarked, there should be no css class
    let animalBookmarkStyle = 'Animal';
    if (isBookmarked) {
        animalBookmarkStyle = 'Animal bookmarked';
    }

    return (
    <section className={animalBookmarkStyle}>
        <h3>Animal Name: { props.name } </h3>
        <p> species: { props.species ? props.species : "Unknown" } </p>
        {props.photo ? <img src={ props.photo } alt= {altText}></img> : "[No Photo]"}
        <button onClick={toggleBookmark}>Bookmark</button>
        <p>Is bookmarked? {isBookmarked ? "True" : "False"}</p>
    </section>);
};

Animal.propTypes = {
    name: PropTypes.string,
    species: PropTypes.string.isRequired,
    adopted: PropTypes.bool,
    age: PropTypes.number,
    photo: PropTypes.string
}

export default Animal;