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
            value={searchTerm}
            onChange={handleFilter}
          />
          <AiOutlineSearch className={searchStyle.searchIcon} />
        </div>

        {filteredData.length !== 0 && (
          <div className={searchStyle.searchResultsWrapper}>
            <h4 className={emojiStyle.iconCategoryHeading}>Search Results</h4>
            <div className={searchStyle.searchResults}>
              {filteredData.map((item: any) =>
                item.map((emoji: any) => {
                  return (
                    <p key={emoji.id} className={emojiClasses.emojiIcons}>
                      {emoji.emoji}
                    </p>
                  );
                })
              )}
            </div>
          </div>
        )}
      </div>

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
                          <p
                            key={emoji.id}
                            className={emojiClasses.emojiIcons}
                            onClick={props.onClick}
                          >
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
