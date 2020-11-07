import React from 'react';
import { Button } from '@material-ui/core';
import './Header.css'
const Header = () => {
  return (
    <div className='headerBody'>
      <h1 > This is a social buddy app.  </h1>
      <a href="/home"> <Button variant="contained" color="primary" >Home </Button>
      </a>
    </div>
  );
};

export default Header;