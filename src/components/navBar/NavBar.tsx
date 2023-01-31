import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NavBar.css';

const NavBar: React.FC = (): JSX.Element => {
  const navigate = useNavigate();
  return (
    <div className='nav-bar-container'>
      <div className='nav-bar-logo'>
        <a href='https://github.com/uch2ha' target='_blank'>
          <span>Dmitry Sinyavskiy</span>
        </a>
      </div>
      <div className='nav-bar-btns'>
        <span onClick={() => navigate('/')}>main</span>
        <span onClick={() => navigate('/history')}>history</span>
        <span onClick={() => navigate('/about')}>about</span>
      </div>
    </div>
  );
};

export default NavBar;
