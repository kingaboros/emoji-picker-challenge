import React, { useState } from 'react';
import { Button, Form, Alert } from 'react-bootstrap';

import { GoSmiley } from 'react-icons/go';

import strings from '../../themes/strings';

import * as classes from './ChatInput.module.scss';

const ChatInput = (props: any) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(value);
    setValue('');
  };

  return (
    <div className={classes.inputWrapper}>
      <div className={classes.inputArea}>
        <h1 className={classes.heading}>{strings.heading.main}</h1>

        <Form onClick={handleSubmit}>
          <Form.Group className={classes.inputForm}>
            <Form.Control
              type="text"
              value={value}
              id="typeText"
              className={classes.input}
              placeholder={strings.input.inputField}
              onChange={(e: any) => setValue(e.target.value)}
            />

            <GoSmiley
              className={classes.inputIcon}
              onClick={props.onShowEmojis}
            />
          </Form.Group>
          <Button className={classes.submitBtn} type="button">
            {strings.button.submitBtn}
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default ChatInput;
