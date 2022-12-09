import React, {useState} from "react";
import data from "../data.json"

//import components
import CharacterList from "./characterList.jsx";

//create your first component
const Home = () => {

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

	return (
		<div className="container-fluid text-center">
			<h1 className="title">Rick and Morty</h1>
			<h2 className="subtitle">the character list</h2>
			<div className="filterSection">
				<input onChange={handleNameChange} type="text" className="form-control" id="filterCharacter" placeholder="Type a name"/>
				<select onChange={handleLocationChange} className="form-select mt-2" placeholder="Select a location">
					<option value="">Select a location</option>
  					{optionsRender}
				</select>
			</div>
			<CharacterList list={data} nameFilter={nameFilter} locationFilter={locationFilter}/>
		</div>
	);
};

export default Home;
