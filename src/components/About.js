import User from "./user";
import Userclass from "./Userclass";
import {Component} from "react";
import userContext from "../utils/userContext";

class About extends Component{
     constructor(props){
        super(props);
        console.log("parent constructor");
     }

     componentDidMount(){
      console.log("parent component did mount");
    }

    render(){
       console.log("parent render");
        return(
            <div>
        <h1>About class component</h1>
        <userContext.Consumer>
            {({loggedInUser})=><h1>{loggedInUser}</h1>}
        </userContext.Consumer>
        <h2>This is Namaste React web series</h2>

        <userContext.Consumer>
            {({loggedInUser})=><h1>UserName is:{loggedInUser}</h1>}
        </userContext.Consumer>
        {/* <User name={"Akshay Saini"} location={"Bangalore"}/> */}
        <Userclass name={"first"} location={"Bangalore"} />
        {/* <Userclass name={"second"} location={"Bangalore"} /> */}
        {/* <Userclass name={"third"} location={"Bangalore"} /> */}
    </div>
    )
}
}
export default About;