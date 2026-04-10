import {useState,useEffect,useContext} from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import userContext from "../utils/userContext.js";
import userOneContext from "../utils/userOneContext.js";
import { useSelector } from "react-redux";

const Header = () => {

 const[btnName,setbtnName]=useState("Login");

 const onlinestatus=useOnlineStatus();
  
 const {loggedInUser}=useContext(userContext)
 console.log(loggedInUser);
 const{loginUser}=useContext(userOneContext);

 // subscribing to the store using a selector

 const cartItems=useSelector((store)=>store.cart.items);

 useEffect(()=>{
  // console.log("useEffect called")
 },[btnName])

  return (
    <div className="flex justify-between bg-pink-100 sm:bg-yellow-50 lg:bg-green-50 shadow-lg">
      <div className="logo-container">
        <img className="w-40" src={LOGO_URL} />
      </div>

      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-2">

            Online Status:{onlinestatus? "green": "red"}
          </li>

          <li className="px-2">
            <Link to="/">Home</Link>
            </li>
          <li className="px-2">
             <Link to="/about">About us</Link>
          </li>
          <li className="px-2">
             <Link to="/grocery">Grocery</Link>
          </li>

          <li className="px-2">
             <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-2 font-bold text-lg" >
            <Link to="/cart"> Cart-({cartItems.length}items)</Link>
           
            </li>
          <button className="login"
            onClick={()=>{
             btnName=="Login" ? setbtnName("Logout"):setbtnName("Login");
            }
            }
          >
            {btnName}
          </button>
          <li className="px-2 font-bold" >{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
