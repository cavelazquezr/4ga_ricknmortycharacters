import React from "react";
import CharacterCard from "./characterCard.jsx";

import rickImage from "../../img/rick.png";

const CharacterList = (props) => {

    const characterFilter = props.list.filter(character =>
        character.location.name.includes(props.locationFilter)
        && character.name.toLowerCase().includes(props.nameFilter.toLowerCase()));

    const characterMap = characterFilter.map((character) => {
        return <li className="inlineList" key={character.id}><CharacterCard character={character}/></li>
    })

    const ifListIsEmpty = () => {
        if(characterFilter.length>0){
            return characterMap
        }
        else{
            return(
                <div>
                    <img id="rick-image" src={rickImage}/>
                    <h1>There are no results</h1>
                </div>
            )
        }
    }
    

    return(
        <ul className="listStyle p-0">
            {ifListIsEmpty()}
        </ul>
    );
};

export default CharacterList;