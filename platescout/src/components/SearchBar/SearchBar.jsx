import React from 'react';
import { useState, useEffect } from 'react';
import './SearchBar.css';

const sortByOptions = {
   "Best Match": "best_match",
   "Highest Rated": "rating",
   "Most Reviewed": "review_count"
};

// function renderSortByOptions() {

//     //this function returns the following three li's
//     return(
//         //for every key in sortByOptions call each one a sortByOption
//         Object.keys(sortByOptions).map(sortByOption => {

//         //return a single list element with a key the content i.e. best match
//         //text of the li replaced by the "Best Match"
//         return <li key ={sortByOptions[sortByOption]}>{sortByOption}</li>
//         }));
    
// }

function SearchBar(props) {

    const [term, setTerm] = useState("");
    const [location, setLocation] = useState("");
    const [sortBy, setSortBy] = useState("best_match");

    useEffect(() => {
        if(term){
            document.title = `PlateScout - Searching for ${term}`;

        } else {
            document.title = 'PlateScout';
        }
    }, [term]);

    const getSortByClass = (sortByOption) => {
        return sortBy === sortByOption ? 'active' : '';
    };

    const handleTermChange = (event) => {
        setTerm(event.target.value);
    };

    const handleLocationChange = (event) => {
        setLocation(event.target.value);
    };

    const handleSortByChange = (sortByOption) => {
        setSortBy(sortByOption);
    };

    const handleSearch = (event) => {
        event.preventDefault();
        props.searchYelp(term, location, sortBy);
    }

    const renderSortByOptions = () => {
    return Object.keys(sortByOptions).map((sortByOption) => {
        const sortByOptionValue = sortByOptions[sortByOption];
        return (
                <li 
                    className={getSortByClass(sortByOptionValue)} 
                    key={sortByOptionValue} 
                    onClick={() => handleSortByChange(sortByOptionValue)}>
                    {sortByOption}
                </li>
            );
        });
    };

    return(
        <div className='SearchBar'>
            <div className='SearchBar-sort-options'>
                <ul>{renderSortByOptions()}</ul>
            </div>

            <form className='SearchBar-fields'>
                
                <input type="text" placeholder="Search Businesses" onChange={handleTermChange} value = {term}></input>
                <input type="text" placeholder="Where" onChange={handleLocationChange} value = {location}></input>
            </form>

            <form className='SearchBar-submit'>
                <button onClick={handleSearch}>Let's Go</button>
            </form>
           
        </div>
    );
}

export default SearchBar;