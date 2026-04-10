// import React from "react"
// class Userclass extends React.Component{

//     constructor(props){
//        super(props);
//        this.state={
//          count:0,
//          count2:2,
//        }
//        console.log(this.props.name+" child constructor");
//     }

//     componentDidMount(){
//       console.log(this.props.name +" child component did mount");
//     }
//     render(){
//          const{name,location}=this.props;
//          const{count,count2}=this.state;

//           console.log(this.props.name+" child render");
//         return(
//          <div className="user-card">
//          <h1>count={count}</h1>
//          <button    
//           onClick={()=>{
//              this.setState({
//                count:this.state.count+1
//              })
//           }
//           }
//          >
//             count increase
//          </button>
//          <h1>count2={count2}</h1>
//         <h2>Name:{name}</h2>
//         <h3>Location:{location}</h3>
//         <h4>Hometown:Dehradun</h4>
//         </div>
//         )
//      }
// }
// export default Userclass;



import React from "react"
class Userclass extends React.Component{

    constructor(props){
       super(props);          
       this.state={
           userInfo:{
               name:"Dummy",
               location:"Default",
           }
       }
       console.log(this.props.name+" child constructor");
    }

    async componentDidMount(){
      console.log(this.props.name +" child component did mount");
      // API call

      const data=await fetch("https://api.github.com/users/akshaymarch7");
      const json=await data.json();
      console.log(json);
      this.setState({
        userInfo:json
      })

    }

    componentDidUpdate(){
      console.log(this.props.name+"child component did update")
    }

    componentWillUnmount(){
      console.log("component will unmount")
    }
    render(){
        //  const{name,location}=this.props;
         const{name,location,avatar_url}=this.state.userInfo

         
        console.log(this.props.name +" child render")
        return(

         <div className="user-card">
        <h2>Name:{name}</h2>
        <img src={avatar_url}></img>
        <h3>Location:{location}</h3>
        <h4>Hometown:Dehradun</h4>
        </div>
        )
     }
}
export default Userclass;

