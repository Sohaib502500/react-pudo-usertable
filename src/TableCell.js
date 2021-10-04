import React from 'react';
import './style.css';

export default function CellTable(user) {
  //console.log('Cell=' + JSON.stringify(user.value));
 
  let userName =
    user.value.name.title +
    ' ' +
    user.value.name.first +
    ' ' +
    user.value.name.last;
  const userid = user.value.id.value;
  const email = user.value.email;
  const gender = user.value.gender;
  const phone = user.value.phone;
  const color = gender === 'male' ? '#77D1F3' : '#93E088';

  return (
    <div style={{ height: '70px' }}>
      <div style={{ width: '350px', display: 'inline-block' }}>
        <div style={{ width: '20px',height:'20px', display: 'inline-block' }}>
          <input
            style={{
              width: '10px',
              height: '10px',
              marginLeft: '5px',
              display: 'flex',
              alignItems: 'top',
            }}
            type="checkbox"
            checked=""
            key={userid}
            onChange={() => user.onValueChanged(user.value)}
          />
        </div>

        <img
          style={{
            height: '65px',
            width: '7px',
            backgroundColor: color,
            borderRadius: '25px',
          }}
          src="null"
          alt=""
        />
        <img
          src={user.value.picture.medium}
          style={{ margin: '5px', height: '65px', width: '65px' }}
          alt=""
        />
        <l1 className={{ width: '500px' }} style={{}}>
          {userName}
        </l1>
      </div>

      {getBlockWithBadge([gender, 'female', gender, '200px'])}
      {getBlockWithText([email, '250px'])}
      {getBlockWithBadge([gender, 'male', phone, '200px'])}
      <img
        style={{
          height: '1px',
          width: '100%',
          backgroundColor: '#CCCCCC',
          marginTop: '0px',
          display:'flex'
        }}
        src="null"
        alt=""
      />
    </div>
  );
}

function getBadgeFor(info) {
  //console.log("getBadge",JSON.stringify(info));
  let badgeClass = 'badge m-2 badge-';
  badgeClass += info.key === info.value ? 'warning' : 'primary';

  return badgeClass;
}

function getBlockWithBadge(info) {
  //console.log('getBadgeBlock', JSON.stringify(info));
  const badgeStyle = getBadgeFor({ key: info[0], value: info[1] });
  const title = info[2];
  const width = info[3];

  return (
    <div style={{ width: width, display: 'inline-block' }}>
      <img
        style={{
          height: '70px',
          width: '1px',
          backgroundColor: '#CCCCCC',
          marginLeft: '5px',
        }}
        src="null"
        alt=""
      />
      <span
        style={{ fontSize: '15px', fontWeight: 'bold',borderRadius:'25px' }}
        className={badgeStyle}
      >
        {' '}
        {title}{' '}
      </span>
    </div>
  );
}

function getBlockWithText(info) {
  const title = info[0];
  const width = info[1];

  return (
    <div style={{ width: width, display: 'inline-block' }}>
      <img
        style={{
          height: '70px',
          width: '1px',
          backgroundColor: '#CCCCCC',
          marginLeft: '5px',
        }}
        src="null"
        alt=""
      />
      <l1
        style={{ fontSize: '15px', fontWeight: 'normal', marginLeft: '10px' }}
      >
        {title}
      </l1>
    </div>
  );
}
