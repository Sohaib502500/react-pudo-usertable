import React from 'react';
import TableCell from './TableCell.js';

export default function TableView(users) {
  console.log("Table="+JSON.stringify(users.value));
  return (
    <div>
      <div style={{display:'inline-block',width:'100%',height:'30px',backgroundColor:'#F8F8F8',}}>
       {getHeaderBlockWith(['Name','350px','109px','207px'])}
       {getHeaderBlockWith(['Gender','200px','50px','101px'])}
       {getHeaderBlockWith(['Email','200px','50px','163px'])}
       {getHeaderBlockWith(['Phone','200px','50px','200px'])}
      </div>
      <u0>
        {users.value.map((user) => (
          <TableCell key={user.id.value} value={user} />
        ))}
      </u0>
    </div>
  );
}

function getHeaderBlockWith(info){
  const title= info[0];
  const width= info[1];
  const marginLeft=info[2];
  const marginLine=info[3];
   
  return(
    <l1 style={{display:'inline-block'}}>
    <l1 style={{fontSize:'14px',fontWeight:'bold',width:width,marginLeft:marginLeft}}>
        {title}
    </l1>
      <img
        style={{
          height: '30px',
          width: '1px',
          backgroundColor: '#CCCCCC',
          marginLeft: marginLine,
        }}
        src="null"
        alt=""
      />
    </l1>
  );
}
