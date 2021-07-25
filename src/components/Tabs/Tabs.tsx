import React, { useState } from 'react';
import SearchBar from '../Search/SearchBar';
import Emojis from '../../emojisDb/emojisList.json';

import { FiClock, FiFlag } from 'react-icons/fi';
import { BsFillPeopleFill } from 'react-icons/bs';
import { GoSmiley } from 'react-icons/go';
import { FaLeaf } from 'react-icons/fa';
import { GiHamburger, GiCommercialAirplane } from 'react-icons/gi';
import { BiBall } from 'react-icons/bi';
import { AiOutlineBulb } from 'react-icons/ai';
import { VscSymbolMethod } from 'react-icons/vsc';

import * as classes from '../IconTabs/IconTabs.module.scss';
import * as emojiClasses from '../EmojisList/EmojiList.module.scss';
import EmojiList from '../EmojisList/EmojiList';

const Tabs = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index: any) => {
    setToggleState(index);
  };

  return (
    <div>
      <div className={classes.iconsTabWrapper}>
        <ul className={classes.tabs}>
          <li>
            <FiClock className={classes.icons} />
          </li>
          <li
            className={toggleState === 1 ? classes.currentTab : ' '}
            onClick={() => toggleTab(1)}
          >
            <GoSmiley className={classes.icons} />
          </li>
          <li
            className={toggleState === 2 ? classes.currentTab : ' '}
            onClick={() => toggleTab(2)}
          >
            <BsFillPeopleFill className={classes.icons} />
          </li>
          <li
            className={toggleState === 3 ? classes.currentTab : ' '}
            onClick={() => toggleTab(3)}
          >
            <FaLeaf className={classes.icons} />
          </li>
          <li
            className={toggleState === 4 ? classes.currentTab : ' '}
            onClick={() => toggleTab(4)}
          >
            <GiHamburger className={classes.icons} />
          </li>
          <li
            className={toggleState === 5 ? classes.currentTab : ' '}
            onClick={() => toggleTab(5)}
          >
            <GiCommercialAirplane className={classes.icons} />
          </li>
          <li
            className={toggleState === 6 ? classes.currentTab : ' '}
            onClick={() => toggleTab(6)}
          >
            <BiBall className={classes.icons} />
          </li>
          <li
            className={toggleState === 7 ? classes.currentTab : ' '}
            onClick={() => toggleTab(7)}
          >
            <AiOutlineBulb className={classes.icons} />
          </li>
          <li
            className={toggleState === 8 ? classes.currentTab : ' '}
            onClick={() => toggleTab(8)}
          >
            <VscSymbolMethod className={classes.icons} />
          </li>
          <li
            className={toggleState === 9 ? classes.currentTab : ' '}
            onClick={() => toggleTab(9)}
          >
            <FiFlag className={classes.icons} />
          </li>
        </ul>

        <SearchBar data={Emojis} />

        <div className={emojiClasses.contentWrapper}>
          <div
            className={
              toggleState === 1
                ? emojiClasses.currentEmojiList
                : emojiClasses.emojiList
            }
          >
            <div>
              {Emojis.map((emoji: any) => {
                return (
                  <h4
                    className={emojiClasses.iconCategoryHeading}
                    key={emoji.emojiSmileys}
                  >
                    {emoji.category1}
                  </h4>
                );
              })}
            </div>

            <div className={emojiClasses.emojiWrapper}>
              <div className={emojiClasses.emojiRow}>
                <div className={emojiClasses.emojis}>
                  {Emojis.map((emoji: any) => {
                    return (
                      <a
                        className={emojiClasses.emojiIcons}
                        key={emoji.emojiSmileys}
                      >
                        {emoji.emojiSmileys}
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div
            className={
              toggleState === 2
                ? emojiClasses.currentEmojiList
                : emojiClasses.emojiList
            }
          >
            <div>
              {Emojis.map((emoji: any) => {
                return (
                  <h4
                    className={emojiClasses.iconCategoryHeading}
                    key={emoji.emojiPeople}
                  >
                    {emoji.category2}
                  </h4>
                );
              })}
            </div>

            <div className={emojiClasses.emojiWrapper}>
              <div className={emojiClasses.emojiRow}>
                <div className={emojiClasses.emojis}>
                  {Emojis.map((emoji: any) => {
                    return (
                      <a
                        className={emojiClasses.emojiIcons}
                        key={emoji.emojiPeople}
                      >
                        {emoji.emojiPeople}
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div
            className={
              toggleState === 3
                ? emojiClasses.currentEmojiList
                : emojiClasses.emojiList
            }
          >
            <div>
              {Emojis.map((emoji: any) => {
                return (
                  <h4
                    className={emojiClasses.iconCategoryHeading}
                    key={emoji.emojiNature}
                  >
                    {emoji.category3}
                  </h4>
                );
              })}
            </div>
            <div className={emojiClasses.emojiWrapper}>
              <div className={emojiClasses.emojiRow}>
                <div className={emojiClasses.emojis}>
                  {Emojis.map((emoji: any) => {
                    return (
                      <a
                        className={emojiClasses.emojiIcons}
                        key={emoji.emojiNature}
                      >
                        {emoji.emojiNature}
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div
            className={
              toggleState === 4
                ? emojiClasses.currentEmojiList
                : emojiClasses.emojiList
            }
          >
            <div>
              {Emojis.map((emoji: any) => {
                return (
                  <h4
                    className={emojiClasses.iconCategoryHeading}
                    key={emoji.emojiFood}
                  >
                    {emoji.category4}
                  </h4>
                );
              })}
            </div>

            <div className={emojiClasses.emojiWrapper}>
              <div className={emojiClasses.emojiRow}>
                <div className={emojiClasses.emojis}>
                  {Emojis.map((emoji: any) => {
                    return (
                      <a
                        className={emojiClasses.emojiIcons}
                        key={emoji.emojiFood}
                      >
                        {emoji.emojiFood}
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div
            className={
              toggleState === 5
                ? emojiClasses.currentEmojiList
                : emojiClasses.emojiList
            }
          >
            <div>
              {Emojis.map((emoji: any) => {
                return (
                  <h4
                    className={emojiClasses.iconCategoryHeading}
                    key={emoji.emojiTravel}
                  >
                    {emoji.category5}
                  </h4>
                );
              })}
            </div>

            <div className={emojiClasses.emojiWrapper}>
              <div className={emojiClasses.emojiRow}>
                <div className={emojiClasses.emojis}>
                  {Emojis.map((emoji: any) => {
                    return (
                      <a
                        className={emojiClasses.emojiIcons}
                        key={emoji.emojiTravel}
                      >
                        {emoji.emojiTravel}
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div
            className={
              toggleState === 6
                ? emojiClasses.currentEmojiList
                : emojiClasses.emojiList
            }
          >
            <div>
              {Emojis.map((emoji: any) => {
                return (
                  <h4
                    className={emojiClasses.iconCategoryHeading}
                    key={emoji.emojiActivities}
                  >
                    {emoji.category6}
                  </h4>
                );
              })}
            </div>
            <div className={emojiClasses.emojiWrapper}>
              <div className={emojiClasses.emojiRow}>
                <div className={emojiClasses.emojis}>
                  {Emojis.map((emoji: any) => {
                    return (
                      <a
                        className={emojiClasses.emojiIcons}
                        key={emoji.emojiActivities}
                      >
                        {emoji.emojiActivities}
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div
            className={
              toggleState === 7
                ? emojiClasses.currentEmojiList
                : emojiClasses.emojiList
            }
          >
            <div>
              {Emojis.map((emoji: any) => {
                return (
                  <h4
                    className={emojiClasses.iconCategoryHeading}
                    key={emoji.emojiObjects}
                  >
                    {emoji.category7}
                  </h4>
                );
              })}
            </div>

            <div className={emojiClasses.emojiWrapper}>
              <div className={emojiClasses.emojiRow}>
                <div className={emojiClasses.emojis}>
                  {Emojis.map((emoji: any) => {
                    return (
                      <a
                        className={emojiClasses.emojiIcons}
                        key={emoji.emojiObjects}
                      >
                        {emoji.emojiObjects}
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div
            className={
              toggleState === 8
                ? emojiClasses.currentEmojiList
                : emojiClasses.emojiList
            }
          >
            <div>
              {Emojis.map((emoji: any) => {
                return (
                  <h4
                    className={emojiClasses.iconCategoryHeading}
                    key={emoji.emojiSymbols}
                  >
                    {emoji.category8}
                  </h4>
                );
              })}
            </div>

            <div className={emojiClasses.emojiWrapper}>
              <div className={emojiClasses.emojiRow}>
                <div className={emojiClasses.emojis}>
                  {Emojis.map((emoji: any) => {
                    return (
                      <a
                        className={emojiClasses.emojiIcons}
                        key={emoji.emojiSymbols}
                      >
                        {emoji.emojiSymbols}
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div
            className={
              toggleState === 9
                ? emojiClasses.currentEmojiList
                : emojiClasses.emojiList
            }
          >
            <div>
              {Emojis.map((emoji: any) => {
                return (
                  <h4
                    className={emojiClasses.iconCategoryHeading}
                    key={emoji.emojiFlags}
                  >
                    {emoji.category9}
                  </h4>
                );
              })}
            </div>
            <div className={emojiClasses.emojiWrapper}>
              <div className={emojiClasses.emojiRow}>
                <div className={emojiClasses.emojis}>
                  {Emojis.map((emoji: any) => {
                    return (
                      <a
                        className={emojiClasses.emojiIcons}
                        key={emoji.emojiFlags}
                      >
                        {emoji.emojiFlags}
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
