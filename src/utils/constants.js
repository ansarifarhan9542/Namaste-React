export const LOGO_URL="https://cdn.dribbble.com/userupload/16778067/file/original-d75cb39663149843b1572e4cc64681fe.jpg?resize=400x0"
export const MENU_API =
"https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.7898535&lng=86.42647&restaurantId=867295&catalog_qa=undefined&submitAction=ENTER%22"

export const CDN_URL="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"



  // "https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=";


  // import RestaurantCard,{withPromotedlabel} from "./Restaurantcard.js";
  // import { useState, useEffect } from "react";
  // import reslist from "../utils/mockdata.js";
  // import Shimmer from "./Shimmer.js";
  // import { Link } from "react-router-dom";
  // import useOnlineStatus from "../utils/useOnlineStatus.js";
  
  // const Body = () => {
  //   const [listOfRestaurants, setListOfRestaurants] = useState(reslist);
  //   const[searchText,setsearchText]=useState("");
  //   const[filteredRestaurant,setfilteredRestaurant]=useState(reslist);
  
  //   const RestaurantCardPromoted=withPromotedlabel(RestaurantCard);
  
  
  
  //   // if(listOfRestaurants.length==0){
  //   //   return <Shimmer/>
  //   // }
  //   //  OR use ternary operator
     
  //   // console.log("Body rendered",listOfRestaurants)
  //   const onlinestatus=useOnlineStatus();
  //   if(onlinestatus===false){
  //     return(
  //       <h1>Looks like you are offline!! Please check your internet connection</h1>
  //     )
  //   }
  //   return listOfRestaurants.length==0? (
  //     <Shimmer/>
  //   ) : (
  //     <div className="body">
  //       <div className="filter">
  //         <div className="search">
  //           <input type="text" 
  //           className="border border-solid border-black m-5"
  //            value={searchText}
  //            onChange={(e)=>{
  //              setsearchText(e.target.value)
  //            }}
  //            />
  //           <button
  //            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
  //             onClick={()=>{
  //               // Filter the restaurant cards and update the UI
  //               // SearchText
  //               const filteredlist=listOfRestaurants.filter(
  //                 (res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase())
  //               )
  //             setfilteredRestaurant(filteredlist);
              
  //             }}
  //             >
  //             Search
  //             </button>
  //           </div>
  
          
  //         <div className="m-4 p-4 flex items-center">
  //         <button
  //           className="px-4 py-2 bg-gray-300 rounded-lg"
  //           onClick={() => {
  //             const filteredList = listOfRestaurants.filter(
  //               (res) => res?.info?.avgRating > 4
  //             );
  //             setfilteredRestaurant(filteredList);
  //           }}
  //         >
  //           Top Rated Restaurants
  //         </button>
  //           </div>
  
               
  //       </div>
  
  //       <div className="flex flex-wrap">
  
  //         {filteredRestaurant.map((restaurant) => (
             
  //           <Link
  //           key={restaurant.info.id}
  //           to={"/restaurants/"+restaurant.info.id}
  //           >
  //             {restaurant.info.avgRating>4?(
  //             <RestaurantCardPromoted resData={restaurant}/>
  //             ):( 
  //             <RestaurantCard resData={restaurant} />
  //           )}
             
  //           </Link>
          
  //         ))}
  //       </div>
  //     </div>
  //   );
  // };
  
  // export default Body;