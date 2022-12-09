import React, {useState} from "react";
import data from "../data.json"

const CharacterFilters = () => {

    //Obtener todas las localizaciones
	let uniqueLocationMap = [...new Set(data.map(character => character.location.name))];
	const optionsRender = uniqueLocationMap.map((location) => {
		return <option value={location} key={location}>{location}</option>
	})

	//Variables de estado
	const [nameFilter, setNameFilter] = useState('');
	const [locationFilter, setLocationFilter] = useState('');

	const handleNameChange = event => {
		setNameFilter(event.target.value)
	};

	const handleLocationChange = event => {
		setLocationFilter(event.target.value)
		console.log(locationFilter)
	};

    return(
        <div className="filterSection">
            <h3 className="text-start">Filters</h3>
            <div className="d-flex mb-2 inputStyle">
                <label className="form-label">By name:</label>
                <input onChange={handleNameChange} type="text" className="form-control" id="filterCharacterName"/>
            </div>
            <div className="d-flex inputStyle">
                <label className="form-label">By location:</label>
                <select onChange={handleLocationChange} className="form-select" placeholder="Select a location" id="filterCharacterLocation">
                    <option value="">Select a location</option>
                      {optionsRender}
                </select>
            </div>
        </div>
    );
};

export default CharacterFilters;