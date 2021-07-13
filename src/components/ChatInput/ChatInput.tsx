import React from 'react';
import { Button } from 'react-bootstrap';

import strings from '../../themes/strings';

import * as classes from './ChatInput.module.scss';

const Input = () => {
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
        <Button className={classes.emojiBtn} type="button">
          {strings.button.emojiBtn}
        </Button>
      </div>
    </div>
  );
};

export default Input;
