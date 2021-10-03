import React from "react";
import MainPage from "./MainPage.js";


export class DataManager extends React.Component{
  constructor(){
    super();
    
    this.state = {
      users : [],
      isLoading : true,
    };
    this.getDataFromApi();
  }

  async getDataFromApi() {
    console.log("trying");
    const response=await fetch('https://randomuser.me/api/?results=3');
    const res=await response.json();
    //console.log("success="+JSON.stringify(res));
    this.setState({ users: res.results,isLoading : false});
  }


  render(){
    //console.log("success="+JSON.stringify(this.state.users));
    if(this.state.isLoading) return (<div>Loading Data</div>);
    return(
      <MainPage value={this.state.users}/>
    );
  }
  
}

