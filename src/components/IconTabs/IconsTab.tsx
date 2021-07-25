import React from 'react';

import EmojiList from '../EmojisList/EmojiList';
import SearchBar from '../Search/SearchBar';

import icons from '../../themes/icons';

import * as classes from './IconTabs.module.scss';

const IconsTab = () => {
  const handleClick = (e: any) => {
    e.preventDefault();
    console.log('Categ clicked');
  };
  return (
    <div className={classes.iconsTabWrapper}>
      <ul className={classes.tabs} onClick={handleClick}>
        <li className={classes.icons}>{icons.clock}</li>
        <li className={classes.icons}>{icons.smiley}</li>
        <li className={classes.icons}>{icons.people}</li>
        <li className={classes.icons}>{icons.leaf}</li>
        <li className={classes.icons}>{icons.food}</li>
        <li className={classes.icons}>{icons.travel}</li>
        <li className={classes.icons}>{icons.activities}</li>
        <li className={classes.icons}>{icons.objects}</li>
        <li className={classes.icons}>{icons.flags}</li>
      </ul>
      <SearchBar />
      <EmojiList />
    </div>
  );
};

export default IconsTab;
