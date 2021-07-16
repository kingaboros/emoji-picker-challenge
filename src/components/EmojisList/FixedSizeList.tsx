import React from 'react';
import { FixedSizeList as List } from 'react-window';

import * as data from '../../emojisDb/emojisList.json';

import EmojiList from './EmojiList';

const emojis = data;

const FixedSizedList = (props: any) => (
  <List height={200} width={400} itemSize={50} itemCount={emojis.length}>
    {EmojiList}
  </List>
);

export default FixedSizedList;
