import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import Emojis from '../../emojisDb/emojisList.json';
import * as classes from './IconTabs.module.scss';

const IconTabs = (props: any) => {
  const [emoji, setEmoji] = useState('');
  const [page, setPage] = useState<number>(0);

  return (
    <div className="container">
      <ul className="nav nav-tabs">
        <li className="nav-item">
          {Emojis.map(emoji => {
            return <a key={emoji.description}>{emoji.emoji}</a>;
          })}
        </li>
      </ul>
    </div>
  );
};

export default IconTabs;
