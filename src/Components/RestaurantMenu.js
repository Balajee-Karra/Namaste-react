import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { MENU_API } from "../Utils/Constants";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
    
    const [resInfo, setResInfo] = useState(null);

    const {resId} = useParams();

    console.log("resId's",resId);

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {

        const data = await fetch(MENU_API + resId);
        const json = await data.json();
        setResInfo(json);
        console.log("Res List1",json);
        console.log("Res List2",resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card);

    };

    const { name, cuisines, costForTwoMessage } = resInfo?.data?.cards[2]?.card?.card?.info || {};

    const {itemCards} = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card || {};  

    return ( 
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines?.join(", ")} - {costForTwoMessage}</p>
            <h2>Menu</h2>
            {itemCards == null ? (<p>Loading...</p>) 
            :
            (
            <ul>
                {itemCards.map(item => (
                <li key={item.card.info.id} >
                 {item.card.info.name} - ₹ {item.card.info.defaultPrice/100 || item.card.info.price/100} </li>
                ))}
            </ul>
            )
            }
        </div>
    );
};

export default RestaurantMenu;
