import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {


    const [OriginalListofRestaurants, SetOriginalListofRestaurant] = useState([]);
    const [ListofRestaurants, SetListofRestaurant] = useState([]);
    const [searchText, setSearchText] = useState([""]);

    console.log("Body rendered");

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

    return ListofRestaurants.length === 0 ? (
        <Shimmer/> )
  :     (
          <div className="body">
              <div className="Search">
              <input type="text" className="Search-Box" value={searchText} onChange={(e) => { 
                  setSearchText(e.target.value)
                  }}/>
              <button className="btn"
              onClick={() => {
                  
                  // const Searchlist = OriginalListofRestaurants.filter(res => res.info.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1);
  
                  const Searchlist = OriginalListofRestaurants.filter ((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                  
                //   console.log(ListofRestaurants);
                console.log(searchText);  
                console.log(Searchlist);
  
                  SetListofRestaurant(Searchlist);
              }}
              >Search</button>
              </div>
              <div className="filter">
                  <button className="filter-btn" onClick={() => {
                      const filteredList = OriginalListofRestaurants.filter((res) => res.info.avgRating > 4.5);
                      SetListofRestaurant(filteredList);
                  }}>Top Rated Restaurants</button>
              </div>
              <div className="res-container">
                  {ListofRestaurants.map(restaurant => (
                      <RestaurantCard key={restaurant.info.id} resData={restaurant.info} />
                  ))}
              </div>
          </div>
      );
  };
  
export default Body;
