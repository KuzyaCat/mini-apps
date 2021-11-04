import React from 'react';
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { IconButton } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';

import { ROUTES } from '../../constants';
import './header.css';

export function Header({ backButton }) {
  const history = useHistory();

  return (
    <div className='header'>
      {backButton ? (
        <IconButton onClick={() => history.replace(backButton)}>
          <ArrowBackIosIcon className='header__icon' />
        </IconButton>
      ) : (
        <Link to={ROUTES.PROFILE}>
          <IconButton>
            <PersonIcon className='header__icon' />
          </IconButton>
        </Link>
      )}

      <Link to={ROUTES.MAIN}>
        <img
          className='header__logo'
          src={`${process.env.PUBLIC_URL}/logo.png`}
          alt='tinder logo'
        />
      </Link>

      <Link to='/chat'>
        <IconButton>
          <ForumIcon className='header__icon' />
        </IconButton>
      </Link>
    </div>
  );
}

