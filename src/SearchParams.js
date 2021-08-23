import React, { useState, useEffect, useContext } from "react";
import Results from './Results'
// eslint-disable-line react-hooks/exhaustive-deps
import useBreedList from "./useBreedList";
import ThemeContext from "./ThemeContext";


const ANIMALS = ['bird', 'cat', 'dog', 'rabbit', 'reptile']



const SearchParams = () => {
const [location, setLocation] = useState("")
const [animal, setAnimal] = useState('')
const [breed, setBreed] = useState('')
const [pets, setPets] = useState([])
const [breeds] = useBreedList(animal);
const [themeHook, setThemeHook] = useContext(ThemeContext)

async function requestPets() {
    const res = await fetch(
        `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    )
    const json = await res.json();
    console.log(json);
    
    setPets(json.pets);
}

useEffect( 
    () => {
    requestPets();


    }, [] // eslint-disable-line react-hooks/exhaustive-dep
)
// const isRaining = location === "Seattle, WA" ? true: false;

//THIS IS//////////
// const locationTuple = useState("Seattle, WA")
// const location = locationTuple[0];
// const setLocation = locationTuple[1]
/////useState/////////////////


    return(
<div className='search-params'>
    <form onSubmit={e => {e.preventDefault() 
        requestPets()}}>
        <label htmlFor='location'>
            Location
            <input 
            id="location" 
            placeholder="Location" 
            onChange={(e) => setLocation(e.target.value) }
             value={location}
            />

        </label>
        <label htmlFor='animal'>
            ANIMAL
            <select 
            id="animal"
            value={animal}
            onChange={e => setAnimal(e.target.value)}
            onBlur={e => setAnimal(e.target.value)}>
<option/>
{ANIMALS.map((animal) => (
<option value={animal} key={animal}>
{animal}
</option>
) )

}
            </select>
        </label>
        <label htmlFor='breed'>
            BREED
            <select 
            disabled={!breeds.length}
            id="breed"
            value={breed}
            onChange={e => setBreed(e.target.value)}
            onBlur={e => setBreed(e.target.value)}>
<option/>
{breeds.map((breed) => (
<option value={breed} key={breed}>
{breed}
</option>
) )

}
            </select>
        </label>
<label htmlFor='theme'>
    Theme
    <select value={themeHook} onChange={(e) => setThemeHook(e.target.value)}
    onBlur={(e) => setThemeHook(e.target.value)}>
        
        <option value='darkblue'>Dark Blue</option>
        <option value='red'>Red</option>
        <option value='green'>Green</option>
       
        </select> 
</label>

<button style={ {backgroundColor: themeHook}}>SUBMIT</button>
    </form>

<Results pets={pets}/>

 
</div>

    )//END return
}

export default SearchParams;