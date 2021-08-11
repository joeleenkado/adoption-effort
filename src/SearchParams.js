import { useState } from "react";

const SearchParams = () => {
const [location, setLocation] = useState("Seattle, WA")


    return(
<div className='search-params'>
    <form>
        <label htmlFor='location'>
            Location
            <input 
            id="location" 
            placeholder="Location" 
            onChange={(e) => setLocation(e.target.value) }
             value={location}
            />

        </label>
<button>SUBMIT</button>
    </form>
</div>

    )
}

export default SearchParams;