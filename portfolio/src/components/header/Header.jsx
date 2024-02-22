import React from 'react';
import './styleHeader.css'
import NavTabs from './navTabs/NavTabs';

{/*create Header component */ }
function Header() {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <div className='header-box'>
          <h1 className="display-4 header"> Lydia <strong>Barham</strong>
          </h1>
          <p className="lead">Creative, curious front-end developer, transferring communications skills to create accurate content and code</p>
        </div>
        {/*Read NavTap component*/}
        <NavTabs />
      </div>
    </div>
  );
}

export default Header;
