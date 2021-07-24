import React from 'react';

import Emojis from '../../emojisDb/emojis.json';

import * as emojiClasses from './EmojiList.module.scss';

import * as classes from '../IconTabs/IconTabs.module.scss';
import $ from 'jquery';

const EmojiList = (props: any) => {
  // const json = require('../../emojisDb/emojis.json');

  // console.log(JSON.parse(json).Smileys[1].tags);

  $.get('../../emojisDb/emojis.json').done(data => {
    console.log(data);
  });

  // const emojis = Object.keys(json).map((categ: any) => {
  //   <div id={categ}>{categ}</div>;
  //   json[categ].map((emoji: any) => {
  //     return <p>{emojis}</p>;
  //   });
  // });
  return (
    <div className={classes.iconsTabWrapper}>
      <div className={emojiClasses.currentEmojiList}>
        <div className={emojiClasses.emojiWrapper}>
          <div className={emojiClasses.emojiRow}>
            {/* {emojis} */}
            console.log(emojis);
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmojiList;
