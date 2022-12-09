import React from "react";
import CharacterCard from "./characterCard.jsx";

const CharacterList = (props) => {

    const characterFilter = props.list.filter(character =>
        character.location.name.includes(props.locationFilter)
        && character.name.toLowerCase().includes(props.nameFilter.toLowerCase()));

    const characterMap = characterFilter.map((character) => {
        return <li className="inlineList" key={character.id}><CharacterCard character={character}/></li>
    })

    return(
        <ul className="listStyle p-0">
            {characterMap}
        </ul>
    );
};

export default CharacterList;