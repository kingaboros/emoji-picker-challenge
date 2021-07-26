import React, { useRef } from 'react';

import EmojiList from '../EmojisList/EmojiList';
import SearchBar from '../Search/SearchBar';

import icons from '../../themes/icons';

import * as classes from './IconTabs.module.scss';

const IconsTab = (props: any) => {
  const handleClick = (e: any) => {
    console.log('categ clicked');
    window.scrollTo({
      behavior: 'smooth',
      top: props.emojisScroll.current.offsetTop,
    });
  };
  return (
    <div className={classes.iconsTabWrapper}>
      <ul className={classes.tabs}>
        <li className={classes.icons}>{icons.clock}</li>
        <li className={classes.icons}>{icons.smiley}</li>
        <li className={classes.icons}>{icons.people}</li>
        <li className={classes.icons}>{icons.leaf}</li>
        <li className={classes.icons}>{icons.food}</li>
        <li className={classes.icons}>{icons.travel}</li>
        <li className={classes.icons}>{icons.activities}</li>
        <li className={classes.icons}>{icons.objects}</li>
        <li className={classes.icons} onClick={handleClick}>
          {icons.flags}
        </li>
      </ul>
      <SearchBar />
      <EmojiList ref={props.emojisScroll} />
    </div>
  );
};

export default IconsTab;
