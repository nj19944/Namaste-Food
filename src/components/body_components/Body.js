import {useState} from "react";
import restaurants from "../../utils/Data";
import RestaurantCard from "./RestaurantCard";
import './Body.css'

const Body = () =>{

    const [listOfRestaurants, setListOfRestraunt] = useState(restaurants);

    return (
            <div className="body">
                <div className="filter">
                    <button 
                    className="filter-btn"
                    onClick = { () => {
                        const filteredList = listOfRestaurants.filter((res) => res.info.avgRating > 4.5);
                        setListOfRestraunt(filteredList);
                    }}
                    >
                        Top Rated Restaurants
                    </button>
                </div>
                <div className="res-container">
                    {
                    listOfRestaurants.map((restaurant) => (
                    <RestaurantCard key={restaurant.info.id} resData = {restaurant} />
                    ))
                    } 
                </div>
            </div>
    )
    ;
}

export default Body;
