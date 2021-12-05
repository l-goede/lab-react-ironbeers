import React from 'react';
import { Link } from 'react-router-dom';
import icon from '../assets/homeIcon.png';

function Header() {
  return (
    <div>
      <Link to="/">{icon}</Link>
    </div>
  );
}

export default Header;
