import React from 'react';
import TableCell from './TableCell.js';

export default function TableView(users) {
  //console.log("Table="+JSON.stringify(users.value));
  return (
    <u0>
      {users.value.map((user) => (
        <TableCell key={user.id} value={user} />
      ))}
    </u0>
  );
}
