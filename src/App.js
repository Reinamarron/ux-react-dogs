import React, { Component } from "react";
import Dog from "./components/Dog";
import Header from "./components/Header";
import "./App.css";

class App extends Component {
  state = { 
    dogs: [
    {
      name: "Scruffles",
    },
    {
      name: "Snarf",
    },
    {
      name: "Wookie",
    },
  ],
  newDogName: ""
  };

  handleChange = (event) => {
    console.log(event.target.value);
    this.setState({newDogName: event.target.value});
  };
handleAdoptDog = event =>{
  this.setState(state=>{
    return{
      dogs:[...state.dogs, {name: state.newDogName}],
      newDogName: ""
    }
  })

}
 render(){
   return (
     <div className="app">
       <Header numDogs={this.state.dogs.length} />
       <h2>My Dogs</h2>
       <ul className="dogList">
         {this.state.dogs.map((dog, index) => (
           <li key={index}>
             <Dog dog={dog} />
           </li>
         ))}
       </ul>
       <br />
       <div>
       <input type="text" 
       onChange={this.handleNewDogChange}
       value={this.state.newDogName}
       />
         <button onClick={this.handleAdoptDog}>Adopt a dog</button>
           </div>
       </div>
   );
 }
}

export default App;