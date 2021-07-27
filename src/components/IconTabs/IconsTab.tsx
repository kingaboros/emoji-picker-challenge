import React, { useState } from 'react';

import EmojiList from '../EmojisList/EmojiList';
import SearchBar from '../Search/SearchBar';

import icons from '../../themes/icons';

import * as classes from './IconTabs.module.scss';
import SearchResults from '../Search/SearchResults';

const IconsTab = (props: any) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const json = require('../../emojisDb/emojis.json');

  const searchHandler = (searchTerm: any) => {
    setSearchTerm(searchTerm);
    if (searchTerm !== ' ') {
      const filteredArr: any = Object.values(json).map((emoji: any) => {
        return emoji.filter((item: any) =>
          item.description.toLowerCase().includes(searchTerm.toLowerCase())
        );
      });
      setSearchResults(filteredArr);
      console.log(filteredArr);
    } else {
      setSearchResults(Object.values(json));
    }
  };

  const showResultsHandler = () => {
    setShowResults(true);
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
      <SearchBar
        term={searchTerm}
        searchKeyword={searchHandler}
        onShowResults={showResultsHandler}
      />
      {showResults && <SearchResults results={searchResults} />}
      <EmojiList />
    </div>
  );
};

export default IconsTab;
