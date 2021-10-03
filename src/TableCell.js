import React from 'react';
import "./style.css";


export default function CellTable(user){
  console.log("Cell="+JSON.stringify(user.value));
  let userName = user.value.name.title+" "+user.value.name.first+" "+user.value.name.last;
  const email = user.value.email;
  
  return(
    
    <l0 style={{maxHeight:'70px'}}>
      <button className="button btn btn-light" style={{height:'70px',width:'20px',fontSize:'15px'}}>{user.id}
      </button>
      <img style={{height:'65px',width:'7px',backgroundColor:'#77D1F3', borderRadius:'25px'}} src="null" alt=""/>
      <img src={user.value.picture.medium} style={{margin:'5px',height:'65px',width:'65px'}} alt=""/>
      <l1 className={{width:'500px'}} style={{width:'500px!important'}}>{userName}</l1>
      <img style={{height:'70px',width:'1px',backgroundColor:'#CCCCCC',marginLeft:'5px'}} src="null" alt=""/>
      <l1 className={{width:'500px!important',marginLeft:'5px',verticleAlign:'textTop'}} style={{width:'500px!important'}}>{email}</l1>
      <img style={{height:'1px',width:'100%',backgroundColor:'#CCCCCC',marginTop:'-30px'}} src="null" alt=""/>
    </l0>
  
  );
}