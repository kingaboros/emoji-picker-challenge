import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

import strings from '../../themes/strings';

import * as classes from './ChatInput.module.scss';

const ChatInput = (props: any) => {
  const [showEmojis, setShowEmojis] = useState();

  const handleShowEmojis = (e: any) => {
    e.preventDefault();
    setShowEmojis(showEmojis);
    console.log('button clicked');
  };

  return (
    <div className={classes.inputWrapper}>
      <div className={classes.inputArea}>
        <h1 className={classes.heading}>{strings.heading.main}</h1>
        <input
          type="text"
          id="typeText"
          className={classes.input}
          placeholder={strings.input.inputField}
        />
        <Button
          onClick={handleShowEmojis}
          className={classes.emojiBtn}
          type="button"
        >
          {strings.button.emojiBtn}
        </Button>
      </div>
    </div>
  );
};

export default ChatInput;
