import {useEffect, useState} from "react";
import { SWIGGY_API } from "../../utils/constants";
import RestaurantCard from "./RestaurantCard";
import './Body.css'
import Shimmer from "./Shimmer";

const Body = () =>{

    const [listOfRestaurants, setListOfRestraunt] = useState([]);

    const [filteredlistOfRestaurants, setFilteredListOfRestraunt] = useState([]);

    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    },[]);

    const fetchData = async() => 
    {
        const data = await fetch(SWIGGY_API);
        const json = await  data.json();

        //console.log(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setListOfRestraunt(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredListOfRestraunt(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    return (listOfRestaurants.length === 0) ? <Shimmer/> :  (
            <div className="body">
                <div className="filter">
                    <div className = "search">
                        <input type = "text" 
                        className="search-box" 
                        value = {searchText} 
                        onChange = {(e) => setSearchText(e.target.value)}
                        />
                        <button 
                            onClick={() => {
                                const filteredRestaurant = listOfRestaurants.filter((res) => 
                                res.info.name.toLowerCase().includes(searchText.toLowerCase())
                                )
                                
                                setFilteredListOfRestraunt(filteredRestaurant);
                            }}
                        >
                            Search
                        </button>
                    </div>
                    <button 
                    className="filter-btn"
                    onClick = { () => {
                        const filteredList = listOfRestaurants.filter((res) => res.info.avgRating > 4.2);
                        setFilteredListOfRestraunt(filteredList);
                    }}
                    >
                        Top Rated Restaurants
                    </button>
                </div>
                <div className="res-container">
                    {
                    filteredlistOfRestaurants.map((restaurant) => (
                    <RestaurantCard key={restaurant.info.id} resData = {restaurant} />
                    ))
                    } 
                </div>
            </div>
    )
    ;
}

export default Body;
