import React from 'react';

const Recipe = ({title, image, calories}) => {
    return(
        <div>
            <h2>Recipe Name: {title}</h2>
            <p>Calories: {calories}</p>
            <img src={image} alt={title} />
        </div>
    )
}

export default Recipe;