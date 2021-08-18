import React from 'react';

import icons from '../../themes/icons';

import * as classes from './IconTabs.module.scss';

const IconsMenu = () => {
  return (
    <nav className={classes.tabs}>
      <a className={classes.icons} href="#">
        {icons.clock}
      </a>
      <a className={classes.icons} href="#">
        {icons.smiley}
      </a>
      <a className={classes.icons} href="#">
        {icons.leaf}
      </a>
      <a className={classes.icons} href="#">
        {icons.food}
      </a>
      <a className={classes.icons} href="#">
        {icons.travel}
      </a>
      <a className={classes.icons} href="#">
        {icons.objects}
      </a>
      <a className={classes.icons} href="#">
        {icons.flags}
      </a>
    </nav>
  );
};

export default IconsMenu;
