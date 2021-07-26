import React, { useRef } from 'react';

import * as emojiClasses from './EmojiList.module.scss';

const EmojiList = (props: any) => {
  const json = require('../../emojisDb/emojis.json');
  const emojisScroll = useRef<HTMLHeadingElement>(null);

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
                      key={categ}
                      className={emojiClasses.iconCategoryHeading}
                      ref={props.ref}
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
  );
};

export default EmojiList;
