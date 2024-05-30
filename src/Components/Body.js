import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";


const Body = () => {

    const [OriginalListofRestaurants, SetOriginalListofRestaurant] = useState([]);
    const [ListofRestaurants, SetListofRestaurant] = useState([]);
    const [searchText, setSearchText] = useState([""]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => { 
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        const restaurants = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        SetListofRestaurant(restaurants);
        SetOriginalListofRestaurant(restaurants);
    };

    const HandleFilteredlist= () => {
        const filteredList = OriginalListofRestaurants.filter((res) => res.info.avgRating > 4.1);
        SetListofRestaurant(filteredList);
    };

    const handleSearch= () => {
    const Searchlist = OriginalListofRestaurants.filter ((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
        SetListofRestaurant(Searchlist);
    };

    const handleInputChange = (event) => {
        setSearchText(event.target.value);
      };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
          handleSearch();
        }
      };

    return OriginalListofRestaurants.length === 0 ? (
        <Shimmer/> )
  :     (
          <div className="body">
              <div className="Search">
              <input 
              type="text" 
              className="Search-Box" 
              value={searchText} 
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
              placeholder="Search..."
            />
              <button className="btn"
              onClick={handleSearch}
              >Search</button>
              </div>
              <div className="filter">
                  <button className="filter-btn" 
                  onClick={HandleFilteredlist}
                  >Top Rated Restaurants</button>
              </div>
              <div className="res-container"> 
                {ListofRestaurants.length > 0 ? (
                  ListofRestaurants.map(restaurant => (
                     <Link 
                     key={restaurant.info.id} 
                     to={"/restaurants/"+ restaurant.info.id}>
                         <RestaurantCard resData={restaurant.info} /> </Link>
                  ))
                ) : (
                <p> Search not found </p>
            )}
              </div>
          </div>
      );
  };
  
export default Body;
