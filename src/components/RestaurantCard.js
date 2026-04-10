import { useContext } from "react";
import userContext from "../utils/userContext";
import userOneContext from "../utils/userOneContext";

const RestaurantCard = (props) => {
  const { resData } = props;
  const {loggedInUser}=useContext(userContext)

  const{cloudinaryImageId,name,cuisines,avgRating,sla}=resData?.info;
  return (
    <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
      <img
        className="rounded-lg"
        alt="res-logo"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
      />
      <h3 className="font-bold py-2 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} ⭐</h4>
      <h4>{sla.slaString}</h4>
      <h4>user:{loggedInUser}</h4>
    </div>
  );
};



// higher order component

export const withPromotedlabel=(RestaurantCard)=>{
    return(props)=>{
      return(
        <div>
         <label className="absolute font-bold bg-black text-white m-2 p-2 rounded-lg">
          Promoted
          </label>
         <RestaurantCard {...props}/>
        </div>
      )
    }
}
  export default RestaurantCard;