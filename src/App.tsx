import React from 'react';

import * as classes from './components/ChatInput/ChatInput.module.scss';

import ChatInput from './components/ChatInput/ChatInput';
import IconTabs from './components/IconTabs/IconTabList';
import Tabs from './components/IconTabs/Tabs';
import IconsTab from './components/IconTabs/IconsTab';

const App = () => {
  return (
    <div className={classes.chatInputPage}>
      <ChatInput />
      {/* <IconTabs /> */}
     <IconsTab />
    </div>
  );
};

export default App;
