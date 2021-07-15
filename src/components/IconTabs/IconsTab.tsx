import React from 'react';
import Modal from '../Modal/Modal';

import { FiClock, FiFlag } from 'react-icons/fi';
import { BsFillPeopleFill } from 'react-icons/bs';
import { GoSmiley } from 'react-icons/go';
import { FaLeaf } from 'react-icons/fa';
import { GiHamburger, GiCommercialAirplane } from 'react-icons/gi';
import { BiBall } from 'react-icons/bi';
import { AiOutlineBulb } from 'react-icons/ai';
import { VscSymbolMethod } from 'react-icons/vsc';

import * as classes from './IconTabs.module.scss';
import EmojiList from '../EmojisList/EmojiList';

const iconsTab = () => {
  return (
    <Modal>
      <div className={classes.iconsTabWrapper}>
        <ul className={classes.tabs}>
          <li className={classes.currentTab}>
            <FiClock className={classes.icons} />
          </li>
          <li>
            <GoSmiley className={classes.icons} />
          </li>
          <li>
            <BsFillPeopleFill className={classes.icons} />
          </li>
          <li>
            <FaLeaf className={classes.icons} />
          </li>
          <li>
            <GiHamburger className={classes.icons} />
          </li>
          <li>
            <GiCommercialAirplane className={classes.icons} />
          </li>
          <li>
            <BiBall className={classes.icons} />
          </li>
          <li>
            <AiOutlineBulb className={classes.icons} />
          </li>
          <li>
            <VscSymbolMethod className={classes.icons} />
          </li>
          <li>
            <FiFlag className={classes.icons} />
          </li>
        </ul>
        <div>
          <EmojiList />
        </div>
      </div>
    </Modal>
  );
};

export default iconsTab;
