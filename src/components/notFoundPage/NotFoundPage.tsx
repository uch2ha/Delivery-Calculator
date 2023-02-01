import React from 'react';
import NavBar from '../navBar/NavBar';

const NotFoundPage = () => {
  return (
    <div className='root-container'>
      <NavBar />
      <h1 style={{ paddingTop: '4rem' }}>Path not resolved</h1>
    </div>
  );
};

export default NotFoundPage;
