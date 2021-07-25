import React from 'react';

import * as emojiClasses from './EmojiList.module.scss';

const EmojiList = () => {
  const json = require('../../emojisDb/emojis.json');

  return (
    <div className={emojiClasses.contentWrapper}>
      <div className={emojiClasses.currentEmojiList}>
        <div className={emojiClasses.emojiWrapper}>
          <div className={emojiClasses.emojiRow}>
            {Object.keys(json).map(categ => {
              return (
                <div>
                  <div>
                    <h4 id={categ} className={emojiClasses.iconCategoryHeading}>
                      {categ}
                    </h4>

                    {json[categ].map((emoji: any) => {
                      return (
                        <p className={emojiClasses.emojiIcons}>{emoji.emoji}</p>
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
  );
};

export default EmojiList;
