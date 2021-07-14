import React from 'react';

import { FiClock, FiFlag } from 'react-icons/fi';
import { GoSmiley } from 'react-icons/go';
import { FaLeaf } from 'react-icons/fa';
import { GiHamburger, GiCommercialAirplane } from 'react-icons/gi';
import { BiBall } from 'react-icons/bi';
import { AiOutlineBulb, AiOutlineSlack } from 'react-icons/ai';
import { VscSymbolMethod } from 'react-icons/vsc';

import Emojis from '../../emojisDb/emojisList.json';

import * as classes from './IconTabs.module.scss';

const iconsTab = () => {
  return (
    <div className={classes.iconsTabWrapper}>
      <ul className={classes.tabs}>
        <li className={classes.currentTab}>
          <FiClock className={classes.icons} />
        </li>
        <li>
          <GoSmiley className={classes.icons} />
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
        <li>
          <AiOutlineSlack className={classes.icons} />
        </li>
      </ul>
      <div className={classes.contentWrapper}>
        {Emojis.map(emoji => {
          console.log(emoji.category);
          return (
            <h4 className={classes.iconCategoryHeading} key={emoji.emoji}>
              {emoji.category}
            </h4>
          );
        })}

        <div className={classes.emojiWrapper}>
          <div className={classes.emojiRow}>
            <div className={classes.emojis}>
              {Emojis.map(emoji => {
                console.log(emoji.category);
                return (
                  <a className={classes.emojiIcons} key={emoji.description}>
                    {emoji.emoji}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default iconsTab;
