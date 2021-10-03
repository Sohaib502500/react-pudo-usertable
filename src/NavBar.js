import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import TableView from "./Table.js";

export default function Navbar(users) {
  return (
    <div>
      <ul
        class="nav nav-tabs"
        id="myTab"
        role="tablist"
        style={{
          backgroundColor: '#E52E4D',
        }}
      >
        <li class="nav-item" role="presentation">
          <button
            class="nav-link active"
            id="home-tab"
            data-bs-toggle="tab"
            data-bs-target="#home"
            type="button"
            role="tab"
            aria-controls="home"
            aria-selected="true"
            style={{ fontSize: '13px', fontWeight: 'bold', marginLeft:'30px' }}
          >
            All Users
          </button>
        </li>
      </ul>
      <div class="tab-content" id="myTabContent">
        <div
          class="tab-pane fade show active"
          id="home"
          role="tabpanel"
          aria-labelledby="home-tab"
        >
           {<TableView value={users.value}/>}
           
        </div>
      </div>
    </div>
  );
}
