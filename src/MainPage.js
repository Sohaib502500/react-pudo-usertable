import React from "react";
import NavBar from "./NavBar.js"


export default function MainPage(users){
  //console.log("MainPage="+JSON.stringify(users));
 
  return (
    <div>
     {<NavBar value={users.value} onValueChanged={users.onValueChanged} />}
    </div>
  );

}

