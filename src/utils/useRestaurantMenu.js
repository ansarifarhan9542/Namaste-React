    import { useState, useEffect } from "react";

    const useRestaurantMenu=(resId)=>{
        const[resInfo,setresInfo]=useState(null);

        useEffect(()=>{
        fetchData();
        },[])

        const fetchData=async ()=>{
            const data=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.7898535&lng=86.42647&restaurantId=867295&catalog_qa=undefined&submitAction=ENTER%22"+resId)
            const json=await data.json();
            setresInfo(json.data)
        };
            

        return resInfo
    }
    export default useRestaurantMenu;
