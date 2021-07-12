import React from 'react';

import strings from '../../themes/strings';

import * as classes from './ChatInput.module.scss';

const Input = () => {
  return (
    <div className={classes.inputWrapper}>
      <div className="form-outline">
        <label className="form-label">Text input</label>
        <input type="text" id="typeText" className="form-control" />
      </div>
    </div>
  );
};

export default Input;
