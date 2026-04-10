import RestaurantCard,{withPromotedlabel} from "./Restaurantcard.js";
import { useState, useEffect,useContext } from "react";
import reslist from "../utils/mockdata.js";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import userContext from "../utils/userContext.js";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const[searchText,setsearchText]=useState("");
  const[filteredRestaurant,setfilteredRestaurant]=useState([]);

  const RestaurantCardPromoted=withPromotedlabel(RestaurantCard);

   useEffect(()=>{
    fetchData();
  },[]);

  const fetchData=async()=>{
    const data=await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.7898535&lng=86.42647&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING%22;");
    const json= await data.json();
    console.log(json);
    setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setfilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }


  // if(listOfRestaurants.length==0){
  //   return <Shimmer/>
  // }
  //  OR use ternary operator
   
  // console.log("Body rendered",listOfRestaurants)
  const onlinestatus=useOnlineStatus();
  if(onlinestatus===false){
    return(
      <h1>Looks like you are offline!! Please check your internet connection</h1>
    )
  }

  const{loggedInUser,setUserName}=useContext(userContext);

  return listOfRestaurants.length==0? (
    <Shimmer/>
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input type="text" 
          className="border border-solid border-black m-5"
           value={searchText}
           onChange={(e)=>{
             setsearchText(e.target.value)
           }}
           />
          <button
           className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={()=>{
              // Filter the restaurant cards and update the UI
              // SearchText
              const filteredlist=listOfRestaurants.filter(
                (res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase())
              )
            setfilteredRestaurant(filteredlist);
            
            }}
            >
            Search
            </button>
          </div>

        
        <div className="m-4 p-4 flex items-center">
        <button
          className="px-4 py-2 bg-gray-300 rounded-lg"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res?.info?.avgRating > 4
            );
            setfilteredRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
          </div>

         <div className="m-4 p-4 flex items-center">
          <label>UserName : </label>
             <input  className="border border-black p-2 m-2"
             type="text"
             value={loggedInUser}
             onChange={(e)=>setUserName(e.target.value)}
             
             />
          </div>

             
      </div>

      <div className="flex flex-wrap">

        {filteredRestaurant.map((restaurant) => (
           
          <Link
          key={restaurant.info.id}
          to={"/restaurants/"+restaurant.info.id}
          >
            {restaurant.info.avgRating>4?(
            <RestaurantCardPromoted resData={restaurant}/>
            ):( 
            <RestaurantCard resData={restaurant} />
          )}
           
          </Link>
        
        ))}
      </div>
    </div>
  );
};

export default Body;





















