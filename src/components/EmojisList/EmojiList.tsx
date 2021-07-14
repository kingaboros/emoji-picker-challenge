import React from 'react';

import Emojis from '../../emojisDb/emojisList.json';

import * as classes from './EmojiList.module.scss';

const emojiList = () => {
  return;
  <div className={classes.contentWrapper}>
    {Emojis.map(emoji => {
      console.log(emoji.category);
      return (
        <h4 className={classes.iconCategoryHeading} key={emoji.emoji}>
          {emoji.category1}
        </h4>
      );
    })}

    <div className={classes.emojiWrapper}>
      <div className={classes.emojiRow}>
        <div className={classes.emojis}>
          {Emojis.map(emoji => {
            console.log(emoji.category);
            return (
              <a className={classes.emojiIcons} key={emoji.description}>
                {emoji.emojiSmileys}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  </div>;
};

export default emojiList;
