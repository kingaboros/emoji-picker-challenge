import React, { useState } from 'react';

import * as emojiClasses from './EmojiList.module.scss';

const EmojiList = (props: any) => {
  const json = require('../../emojisDb/emojis.json');

  const [filteredData, setFilteredData] = useState(json);
  console.log('displayFilteredArr ⬇');
  console.log(filteredData);

  const stateChangeHandler = (event: any) => {
    setFilteredData(props.filteredArr);
    console.log(props.filteredArr);
  };

  return (
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
                    {filteredData.length != 0 && (
                      {filteredData[categ].map((emoji: any) => {
                      return (
                        <p
                          key={emoji.id}
                          className={emojiClasses.emojiIcons}
                          onClick={props.clickHandler}
                          onChange={stateChangeHandler}
                        >
                          {emoji.emoji}
                        </p>
                      );
                    })}
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmojiList;
