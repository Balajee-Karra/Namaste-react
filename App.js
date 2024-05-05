import React from "react";
import ReactDOM from "react-dom/client";

/*  Header
**    - Logo  
**    - Navigation Bar
**  Body
**    - Search Bar
**    - Restaurant container
**      - Restaurant cards 
**  Footer
**     - Copy writes
**     - Links
**     - Address
**     - Contact
**
*/


const Header = () => {
    return(
        <div className="header">
           <div className="logo-container">
             <img className="logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Burger.png" />
           </div>
           <div className="nav-items">
             <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
             </ul>
           </div>
        </div>
    )
}

const RestaurantCard = (props) => {
    const { resData } = props;  // resData now directly refers to the info object of a restaurant

    const {name,cuisines,avgRating,costForTwo,sla,cloudinaryImageId} = resData;

    return (
        <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
            <img className="res-logo" alt={resData.name} src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}/>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4> {/* Handle array of cuisines */}
            <h4>{avgRating} stars. {sla.slaString}</h4>
            <h4>{costForTwo}</h4>
        </div>
    );
};


export const resObj = {
    "restaurants": [
        {
          "info": {
            "id": "10575",
            "name": "Pizza Hut",
            "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
            "locality": "Shanti Nagar",
            "areaName": "Shanti Nagar",
            "costForTwo": "₹600 for two",
            "cuisines": [
              "Pizzas"
            ],
            "avgRating": 4.2,
            "parentId": "721",
            "avgRatingString": "4.2",
            "totalRatingsString": "5K+",
            "sla": {
              "deliveryTime": 37,
              "lastMileTravel": 2,
              "serviceability": "SERVICEABLE",
              "slaString": "35-40 mins",
              "lastMileTravelString": "2.0 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-05-05 01:00:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "50% OFF",
              "subHeader": "UPTO ₹100"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/pizza-hut-shanti-nagar-bangalore-10575",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "43836",
            "name": "McDonald's",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/1/fe11ced6-89a3-4080-8610-3c743a3bb3f0_43836.jpg",
            "locality": "MG Road",
            "areaName": "Ashok Nagar",
            "costForTwo": "₹400 for two",
            "cuisines": [
              "Burgers",
              "Beverages",
              "Cafe",
              "Desserts"
            ],
            "avgRating": 4.3,
            "parentId": "630",
            "avgRatingString": "4.3",
            "totalRatingsString": "10K+",
            "sla": {
              "deliveryTime": 39,
              "lastMileTravel": 2.6,
              "serviceability": "SERVICEABLE",
              "slaString": "35-40 mins",
              "lastMileTravelString": "2.6 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-05-05 02:45:00",
              "opened": true
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "Rxawards/_CATEGORY-Burger.png",
                  "description": "Delivery!"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "description": "Delivery!",
                        "imageId": "Rxawards/_CATEGORY-Burger.png"
                      }
                    }
                  ]
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "40% OFF",
              "subHeader": "UPTO ₹80"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/mcdonalds-mg-road-ashok-nagar-bangalore-43836",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "432976",
            "name": "KFC",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/9869efb0-ef0e-41eb-bffa-9d6e03eef55e_432976.JPG",
            "locality": "Double Road",
            "areaName": "Shanti Nagar",
            "costForTwo": "₹400 for two",
            "cuisines": [
              "Burgers",
              "Biryani",
              "American",
              "Snacks",
              "Fast Food"
            ],
            "avgRating": 4.3,
            "parentId": "547",
            "avgRatingString": "4.3",
            "totalRatingsString": "1K+",
            "sla": {
              "deliveryTime": 34,
              "lastMileTravel": 1.9,
              "serviceability": "SERVICEABLE",
              "slaString": "30-35 mins",
              "lastMileTravelString": "1.9 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-05-04 23:00:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "aggregatedDiscountInfoV2": {
              
            },
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/kfc-double-road-shanti-nagar-bangalore-432976",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "23846",
            "name": "Domino's Pizza",
            "cloudinaryImageId": "d0450ce1a6ba19ea60cd724471ed54a8",
            "locality": "Rehinus Street",
            "areaName": "Richmond Town",
            "costForTwo": "₹400 for two",
            "cuisines": [
              "Pizzas",
              "Italian",
              "Pastas",
              "Desserts"
            ],
            "avgRating": 4.4,
            "parentId": "2456",
            "avgRatingString": "4.4",
            "totalRatingsString": "10K+",
            "sla": {
              "deliveryTime": 25,
              "lastMileTravel": 2.4,
              "serviceability": "SERVICEABLE",
              "slaString": "25 mins",
              "lastMileTravelString": "2.4 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-05-05 02:59:00",
              "opened": true
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "Rxawards/_CATEGORY-Pizza.png",
                  "description": "Delivery!"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "description": "Delivery!",
                        "imageId": "Rxawards/_CATEGORY-Pizza.png"
                      }
                    }
                  ]
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "₹150 OFF",
              "subHeader": "ABOVE ₹299",
              "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/dominos-pizza-rehinus-street-richmond-town-bangalore-23846",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "41105",
            "name": "Nandhini Deluxe",
            "cloudinaryImageId": "zmp84ckarixkz73fzuws",
            "locality": "Kadubisanahalli",
            "areaName": "Basavanagudi",
            "costForTwo": "₹550 for two",
            "cuisines": [
              "Andhra",
              "Chinese"
            ],
            "avgRating": 4.3,
            "parentId": "2451",
            "avgRatingString": "4.3",
            "totalRatingsString": "10K+",
            "sla": {
              "deliveryTime": 33,
              "lastMileTravel": 1.7,
              "serviceability": "SERVICEABLE",
              "slaString": "30-35 mins",
              "lastMileTravelString": "1.7 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-05-05 00:00:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "15% OFF",
              "subHeader": "ABOVE ₹900",
              "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/nandhini-deluxe-kadubisanahalli-basavanagudi-bangalore-41105",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "688434",
            "name": "Kwality Walls Frozen Dessert and Ice Cream Shop",
            "cloudinaryImageId": "7e526a0c0ed3cd56eefac3d318c78977",
            "locality": "WEST PORTION",
            "areaName": "Shanthinagar",
            "costForTwo": "₹200 for two",
            "cuisines": [
              "Desserts",
              "Ice Cream",
              "Ice Cream Cakes"
            ],
            "avgRating": 4.5,
            "veg": true,
            "parentId": "582",
            "avgRatingString": "4.5",
            "totalRatingsString": "50+",
            "sla": {
              "deliveryTime": 39,
              "lastMileTravel": 1.1,
              "serviceability": "SERVICEABLE",
              "slaString": "35-40 mins",
              "lastMileTravelString": "1.1 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-05-04 23:59:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "50% OFF",
              "subHeader": "UPTO ₹100"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            }
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/kwality-walls-frozen-dessert-and-ice-cream-shop-west-portion-shanthinagar-bangalore-688434",
            "type": "WEBLINK"
          }
        }
]}

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {resObj.restaurants.map(restaurant => (
                    <RestaurantCard key={restaurant.info.id} resData={restaurant.info}/>
                ))}
            </div>
        </div>
    );
};

const AppLayout = () => {
   return (
    <div className="app">
        <Header/>
        <Body/>
    </div>
)
}

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);