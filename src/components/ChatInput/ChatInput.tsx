import React from 'react';
import { Form, Button } from 'react-bootstrap';

import * as classes from './ChatInput.module.scss';

const ChatInput = () => {
  return (
    <div className={classes.inputWrapper}>
      <h1 className={classes.heading}>Hello from chat input</h1>
      {/* <Form > 
        <input type="text" className={classes.inputField} placeholder="Add your favorite emoji here..." >
        <Button className={classes.emojiBtn} type="button">Button</Button>
      </Form>
    </div> */}
    </div>
  );
};

export default ChatInput;
