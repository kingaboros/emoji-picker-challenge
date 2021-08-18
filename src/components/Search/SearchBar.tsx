import React from 'react';

import * as searchStyle from './SearchBar.module.scss';

import strings from '../../themes/strings';
import icons from '../../themes/icons';

const SearchBar = (props: any) => {
  return (
    <div className={searchStyle.search}>
      <div className={searchStyle.searchInput}>
        <input
          type="text"
          placeholder={strings.input.searchField}
          className={searchStyle.searchInputField}
          value={props.value}
          onChange={props.onChange}
        />
      </div>
      <i className={searchStyle.searchIcon} onClick={props.onShowEmojis}>
        {icons.search}
      </i>
    </div>
  );
};

export default SearchBar;
