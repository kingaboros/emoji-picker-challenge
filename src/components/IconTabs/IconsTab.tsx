import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

import EmojiList from '../EmojisList/EmojiList';
import SearchResults from '../Search/SearchResults';
import SearchBar from '../Search/SearchBar';

import icons from '../../themes/icons';
import strings from '../../themes/strings';

import * as classes from './IconTabs.module.scss';
import * as searchStyle from '../Search/SearchBar.module.scss';
import * as emojiStyle from '../EmojisList/EmojiList.module.scss';
import * as emojiClasses from '../EmojisList/EmojiList.module.scss';

const json = require('../../emojisDb/emojis.json');

const IconsTab = (props: any) => {
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [emoji, setEmoji] = useState('');

  const handleFilter = (event: any) => {
    const searchTerm = event.target.value;
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

  // const searchHandler = (searchTerm: any) => {
  //   setSearchTerm(searchTerm);
  //   if (searchTerm !== ' ') {
  //     const filteredArr: any = Object.values(json).map((emoji: any) => {
  //       return emoji.filter((item: any) =>
  //         item.description.toLowerCase().includes(searchTerm.toLowerCase())
  //       );
  //     });
  //     setSearchResults(filteredArr);
  //     setShowResults(true);
  //     console.log(filteredArr);
  //   } else {
  //     setSearchResults(Object.values(json));
  //   }
  // };

  // const showResultsHandler = () => {};

  // const handleClick = (e: any) => {
  //   let chosenEmoji = emoji + e.target.innerHTML;
  //   setEmoji(chosenEmoji);
  //   console.log(chosenEmoji);
  // };
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
      <div className={searchStyle.search}>
        <div className={searchStyle.searchInput}>
          <input
            type="text"
            placeholder={strings.input.searchField}
            className={searchStyle.searchInputField}
            // value={searchTerm}
            onChange={handleFilter}
          />

          <AiOutlineSearch className={searchStyle.searchIcon} />
        </div>
        {filteredData.length != 0 && (
          <div className={searchStyle.searchResults}>
            <h4 className={emojiStyle.iconCategoryHeading}>Search Results</h4>
            <div>
              {filteredData.map((emoji: any) => {
                return (
                  <p key={emoji.id} className={emojiClasses.emojiIcons}>
                    {emoji.emoji}
                  </p>
                );
              })}
            </div>
          </div>
        )}
      </div>
      {showResults && <SearchResults results={searchResults} />}
      <div className={emojiClasses.contentWrapper}>
        <div className={emojiClasses.currentEmojiList}>
          <div className={emojiClasses.emojiWrapper}>
            <div className={emojiClasses.emojiRow}>
              {Object.keys(json).map((categ: any) => {
                return (
                  <div>
                    <div>
                      <h4
                        key={categ.categ}
                        className={emojiClasses.iconCategoryHeading}
                      >
                        {categ}
                      </h4>

                      {json[categ].map((emoji: any) => {
                        return (
                          <p key={emoji.id} className={emojiClasses.emojiIcons}>
                            {emoji.emoji}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IconsTab;
