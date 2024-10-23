import React from 'react';
import logoImage from '../assets/blog.png'; // Adjust the path as necessary

function Logo({ width = "10%" }) {
  return (
    <img src={logoImage} style={{ width }} alt='Logo placeholder' />
  );
}

export default Logo;
