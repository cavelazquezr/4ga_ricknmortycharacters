import React from "react";

const CharacterCard = (props) => {
    return(
        <article>
            <img src={props.character.image} alt={props.character.name} />
            <h1><strong>{props.character.name}</strong></h1>
            <p>{props.character.location.name}</p>
        </article>
    );
};

export default CharacterCard;