import { CDN_URL } from "../Utils/Constants";

const RestaurantCard = (props) => {
    const { resData } = props;  // resData now directly refers to the info object of a restaurant

    const {name,cuisines,avgRating,costForTwo,sla,cloudinaryImageId} = resData;

    return (
        <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
            <img className="res-logo" alt={resData.name} src={CDN_URL+cloudinaryImageId}/>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4> {/* Handle array of cuisines */}
            <h4>{avgRating} stars. </h4>
            <h4>{costForTwo}</h4>
        </div>
    );
};

export default RestaurantCard;