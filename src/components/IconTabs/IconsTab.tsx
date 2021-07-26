import React, { useState } from 'react';

import EmojiList from '../EmojisList/EmojiList';
import SearchBar from '../Search/SearchBar';

import icons from '../../themes/icons';

import * as classes from './IconTabs.module.scss';

const IconsTab = (props: any) => {
  const [emojis, setEmojis] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const searchHandler = (searchTerm: any) => {
    setSearchTerm(searchTerm);
    if (searchTerm !== ' ') {
      const filteredArr = emojis.filter((emoji: any) => {
        return Object.keys(emoji)
          .join(' ')
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setSearchResults(filteredArr);
    } else {
      setSearchResults(emojis);
    }
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
        <li className={classes.icons}>{icons.flags}</li>
      </ul>
      <SearchBar term={searchTerm} searchKeyword={searchHandler} />
      <EmojiList />
    </div>
  );
};

export default IconsTab;
