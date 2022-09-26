import React from 'react';
import user from '../../assets/icons/user.svg';
import { Avatar } from '@mui/material';

import './Header.css';

export const Header = () => {
  return (
    <header className="header">
      <p>Diploma UAV pictures predictions</p>
      <Avatar alt="user avatar" src={user} />
    </header>
  );
};
