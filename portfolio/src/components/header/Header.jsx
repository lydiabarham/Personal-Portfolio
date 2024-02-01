import React from 'react';
import './styleHeader.css'
import NavTabs from '../navTabs/NavTabs';

function Header() {
  return (
    <div className="jumbotron jumbotron-fluid">
  <div className="container">
    <h1 className="display-4 header"> Lydia Barham
    </h1>
    <p className="lead">Clear layouts, clear content, built with the user in mind</p>
    <NavTabs />
  </div>
</div>
  );
}

export default Header;
