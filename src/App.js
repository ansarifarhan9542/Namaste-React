// import React from "react";
// import ReactDOM from "react-dom/client";
// const heading=React.createElement("h1",{id:"heading"},"Hello world from React");
// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

{/* <div id="parent">
    <div id="child">
        <h1> I am an h1 tag</h1>
    </div>
</div> */}

// const parent=React.createElement("div",{id:"parent"},
// React.createElement("div",{id:"child"},
//     React.createElement("h1",{},"I am an h1 tag")
// )
// );

// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

{/* <div id="parent">
    <div id="child">
        <h1> I am an h1 tag</h1>
        <h2> I am an h2 tag</h2>
    </div>
</div> */}

// const parent = React.createElement("div", { id: "parent" },
//     React.createElement("div", { id: "child" },
//         [React.createElement("h1", {}, "I am an h1 tag"),
//         React.createElement("h2", {}, "I am an h2 tag")
//         ]
//     )
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

{/* <div id="parent">
    <div id="child1">
        <h1> I am an h1 tag</h1>
        <h2> I am an h2 tag</h2>
    </div>
    
     <div id="child2">
        <h1> I am an h1 tag</h1>
        <h2> I am an h2 tag</h2>
    </div>
</div>  */}


// const parent = React.createElement("div", { id: "parent" },[
//     React.createElement("div", { id: "child1",key:"child1" },
//         [React.createElement("h1", {key:"h1-1"}, "I am an h1 tag"),
//         React.createElement("h2", {key:"h2-1"}, "I am an h2 tag")
//         ]),
//          React.createElement("div", { id: "child2",key:"child2" },
//         [React.createElement("h1", {key:"h1-1"}, "I am an h1 tag"),
//         React.createElement("h2", {key:"h2-1"}, "I am an h2 tag")
//         ])
//     ]   
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

// const heading=React.createElement("h1",{id:"heading"},"Namaste React");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// const jsxHeading= (<h1 id="heading" className="head" tabIndex="1">
//     Namaste react from JSX
//     </h1>
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading);


// const Title=() =>(
//   <h1 className="head">Namaste React using JSX</h1>
// );

// we can use normal function as well 
// const Title=function(){
//     return(
//         <h1 className="head" tabIndex="5">
//             Namaste React using JSX
//         </h1>
//     );
// }


// const HeadingComponent=() =>(
//      <div id="container">
//         <Title/>
//         <h1 className="heading">Namaste React functional component</h1>
//      </div>
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<HeadingComponent/>);

// const elem=<span>React element</span>
// const title=(
//         <h1 className="head" tabIndex="5">
//             {elem}
//             Namaste React using JSX
//         </h1>
//     );

// const HeadingComponent=() =>(
//      <div id="container">
//         {title}
//         <h1 className="heading">Namaste React functional component</h1>
//      </div>
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<HeadingComponent/>);

// const Title= ()=>(
//         <h1 className="head" tabIndex="5">
//             Namaste React using JSX
//         </h1>
//     );

// const HeadingComponent=() =>(
//      <div id="container">
//         <Title/>
//         <Title></Title>
//         {Title()}
//         <h1 className="heading">Namaste React functional component</h1>
//      </div>
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<HeadingComponent/>);

import React,{lazy, Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"
import Body from "./components/Body"
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import userContext from "./utils/userContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
// import RestaurantCard from "./components/RestaurantCard";
// import Grocery from "./components/Grocery";

const Grocery=lazy(()=>import("./components/Grocery"))


const AppLayout = () => {
  
  const[userName,setUserName]=useState();

  // authentication
  useEffect(()=>{
    // make an api call and send username and password
    const data={
      name:"Akshay Saini",
    };
    setUserName(data.name)
  },[])

  return (
      <Provider store={appStore}>

      <userContext.Provider value={{loggedInUser:userName,setUserName}}>
    <div className="app">
      <Header />
      <Outlet/>
    </div>
    </userContext.Provider> 
      </Provider>
  );
};

const appRouter=createBrowserRouter([   
   {
     path:"/",
     element:<AppLayout/>,
     children:[
         {
          path:"/",
          element:<Body/>
        },
         {
          path:"/about",
          element:<About/>
        },

        {
          path:"/grocery",
          element:<Suspense fallback={<h1>Loading..</h1>}>
            <Grocery/></Suspense>
        },

      {
          path:"/contact",
          element:<Contact/>
     },
     {
        path:"/restaurants/:resId",
        element:<RestaurantMenu/>
     },
      {
        path:"/cart",
        element:<Cart/>
     },
     ],
     errorElement:<Error/>
   },
   
])


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);