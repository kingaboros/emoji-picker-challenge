import React from 'react';

import * as classes from './components/ChatInput/ChatInput.module.scss';

import Input from './components/ChatInput/Input';

const App = () => {
  return (
    <div className={classes.chatInputPage}>
      <Input />
    </div>
  );
};

export default App;
