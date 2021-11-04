import React from 'react';
import CloseIcon from '@material-ui/icons/Close';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { IconButton } from '@material-ui/core';

import './swipe-buttons.css';

export function SwipeButtons() {
  return (
    <div className='swipeButtons'>
      <IconButton className='siwpeButtons__left'>
        <CloseIcon fontSize='large' />
      </IconButton>
      <IconButton className='siwpeButtons__right'>
        <FavoriteIcon fontSize='large' />
      </IconButton>
    </div>
  );
}

