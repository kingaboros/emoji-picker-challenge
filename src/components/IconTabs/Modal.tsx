import React, { useState } from 'react';

import IconsMenu from './IconsMenu';
import SearchBar from '../Search/SearchBar';
import SearchResults from '../Search/SearchResults';
import EmojiList from '../EmojisList/EmojiList';

import * as classes from './IconTabs.module.scss';
import * as searchStyle from '../Search/SearchBar.module.scss';

const json = require('../../emojisDb/emojis.json');

const Modal = (props: any) => {
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleFilter = (event: any) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);
    const filteredArr: any = Object.values(json).map((emoji: any) => {
      return emoji.filter((item: any) =>
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
    if (searchTerm === '') {
      setFilteredData([]);
    } else {
      setFilteredData(filteredArr);
      console.log(filteredArr);
    }
  };

  return (
    <div className={classes.iconsTabWrapper}>
      <IconsMenu />
      <div className={searchStyle.search}>
        <SearchBar value={searchTerm} onChange={handleFilter} />

        {filteredData.length !== 0 && <SearchResults data={filteredData} />}
        <EmojiList />
      </div>
    </div>
  );
};

export default Modal;
