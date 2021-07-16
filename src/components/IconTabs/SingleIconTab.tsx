import React, { useState, useEffect } from 'react';

import Emojis from '../../emojisDb/emojisList.json';

import * as emojiClasses from '../EmojisList/EmojiList.module.scss';

const SingleIconTab = (props: any) => {
  const [icons, setIcons] = useState([]);

  const json = require('../../emojisDb/emojisList.json');

  const uniqueCategories = [
    ...json
      .reduce((map: any, obj: any) => map.set(obj.id, obj), new Map())
      .values(),
  ];

  console.log(uniqueCategories);

  return (
    <div>
      {json.map((props: any) => {
        return (
          <h4 className={emojiClasses.iconCategoryHeading} key={props.key}>
            {props.category}
          </h4>
        );
      })}
    </div>
  );
};

export default SingleIconTab;
