import React, { useState } from 'react';

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
import SingleIconTab from '../IconTabs/SingleIconTab';

const Tabs = (props: any) => {
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

        <div className={emojiClasses.contentWrapper}>
          <div
            className={
              toggleState === 1
                ? emojiClasses.currentEmojiList
                : emojiClasses.emojiList
            }
          >
            <div>
              <SingleIconTab
                key={props.emojiSmileys}
                category={props.category1}
              />
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
            <div className={emojiClasses.iconCategoryHeading}>
              <SingleIconTab key={props.key} category={props.category} />
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
              <SingleIconTab
                key={props.emojiNature}
                category={props.category3}
              />
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
              <SingleIconTab key={props.emojiFood} category={props.category4} />
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
              <SingleIconTab
                key={props.emojiTravel}
                category={props.category5}
              />
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
              <SingleIconTab
                key={props.emojiActivities}
                category={props.category6}
              />
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
              <SingleIconTab
                key={props.emojiObjects}
                category={props.category7}
              />
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
              <SingleIconTab
                key={props.emojiSymbols}
                category={props.category8}
              />
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
              <SingleIconTab
                key={props.emojiFlags}
                category={props.category9}
              />
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
