import RestaurantCard from "./RestaurantCard";
import resObj from "../Utils/mockData";
import { useState } from "react";
import { useEffect } from "react";

// const [ListofRestaurants, SetListofRestaurant] = useState([
//   {
//       "info": {
//         "id": "10575",
//         "name": "Pizza Hut",
//         "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
//         "locality": "Shanti Nagar",
//         "areaName": "Shanti Nagar",
//         "costForTwo": "₹600 for two",
//         "cuisines": [
//           "Pizzas"
//         ],
//         "avgRating": 4.2,
//         "parentId": "721",
//         "avgRatingString": "4.2",
//         "totalRatingsString": "5K+"
//     }
//   },
//   {
//       "info": {
//         "id": "10579",
//         "name": "Dominos",
//         "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
//         "locality": "Shanti Nagar",
//         "areaName": "Shanti Nagar",
//         "costForTwo": "₹600 for two",
//         "cuisines": [
//           "Pizzas"
//         ],
//         "avgRating": 3.8,
//         "parentId": "721",
//         "avgRatingString": "4.2",
//         "totalRatingsString": "5K+"
//     }
//   },
//   {
//       "info": {
//         "id": "10576",
//         "name": "KFC",
//         "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
//         "locality": "Shanti Nagar",
//         "areaName": "Shanti Nagar",
//         "costForTwo": "₹600 for two",
//         "cuisines": [
//           "Pizzas"
//         ],
//         "avgRating": 4.5,
//         "parentId": "721",
//         "avgRatingString": "4.2",
//         "totalRatingsString": "5K+"
//     }
//   }
// ]);


const Body = () => {
    const [ListofRestaurants, SetListofRestaurant] = useState(resObj.restaurants);

    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    filteredList = ListofRestaurants.filter((res) => res.info.avgRating> 4
                    );   
                    SetListofRestaurant(filteredList);
                }
                }> Top Rated Restaurants </button>
            </div>
            <div className="res-container">
                {ListofRestaurants.map(restaurant => (
                    <RestaurantCard key={restaurant.info.id} resData={restaurant.info}/>
                ))}
            </div>
        </div>
    );
};

export default Body;