import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

import strings from '../../themes/strings';
import icons from '../../themes/icons';

import * as classes from './ChatInput.module.scss';

const ChatInput = (props: any) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();

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
            <i className={classes.inputIcon} onClick={props.onShowEmojis}>
              {icons.smiley}
            </i>
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
