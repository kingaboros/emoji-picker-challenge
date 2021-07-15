import React from 'react';
import { FixedSizeList as List } from 'react-window';

import Emojis from '../../emojisDb/emojisList.json';

import * as classes from './EmojiList.module.scss';

const emojiList = (props: any) => {
  return (
    <div className={classes.contentWrapper}>
      <div>
        {Emojis.map((emoji: any) => {
          return (
            <h4
              className={classes.iconCategoryHeading}
              key={emoji.emojiSmileys}
            >
              {emoji.category1}
            </h4>
          );
        })}
      </div>

      <div className={classes.emojiWrapper}>
        <div className={classes.emojiRow}>
          <div className={classes.emojis}>
            {Emojis.map((emoji: any) => {
              return (
                <a className={classes.emojiIcons} key={emoji.emojiSmileys}>
                  {emoji.emojiSmileys}
                </a>
              );
            })}
          </div>
        </div>
      </div>
      <div>
        {Emojis.map((emoji: any) => {
          return (
            <h4 className={classes.iconCategoryHeading} key={emoji.emojiPeople}>
              {emoji.category2}
            </h4>
          );
        })}
      </div>

      <div className={classes.emojiWrapper}>
        <div className={classes.emojiRow}>
          <div className={classes.emojis}>
            {Emojis.map((emoji: any) => {
              return (
                <a className={classes.emojiIcons} key={emoji.emojiPeople}>
                  {emoji.emojiPeople}
                </a>
              );
            })}
          </div>
        </div>
      </div>
      <div>
        {Emojis.map((emoji: any) => {
          return (
            <h4 className={classes.iconCategoryHeading} key={emoji.emojiNature}>
              {emoji.category3}
            </h4>
          );
        })}
      </div>

      <div className={classes.emojiWrapper}>
        <div className={classes.emojiRow}>
          <div className={classes.emojis}>
            {Emojis.map((emoji: any) => {
              return (
                <a className={classes.emojiIcons} key={emoji.emojiNature}>
                  {emoji.emojiNature}
                </a>
              );
            })}
          </div>
        </div>
      </div>
      <div>
        {Emojis.map((emoji: any) => {
          return (
            <h4 className={classes.iconCategoryHeading} key={emoji.emojiFood}>
              {emoji.category4}
            </h4>
          );
        })}
      </div>

      <div className={classes.emojiWrapper}>
        <div className={classes.emojiRow}>
          <div className={classes.emojis}>
            {Emojis.map((emoji: any) => {
              return (
                <a className={classes.emojiIcons} key={emoji.emojiFood}>
                  {emoji.emojiFood}
                </a>
              );
            })}
          </div>
        </div>
      </div>
      <div>
        {Emojis.map((emoji: any) => {
          return (
            <h4 className={classes.iconCategoryHeading} key={emoji.emojiTravel}>
              {emoji.category5}
            </h4>
          );
        })}
      </div>

      <div className={classes.emojiWrapper}>
        <div className={classes.emojiRow}>
          <div className={classes.emojis}>
            {Emojis.map((emoji: any) => {
              return (
                <a className={classes.emojiIcons} key={emoji.emojiTravel}>
                  {emoji.emojiTravel}
                </a>
              );
            })}
          </div>
        </div>
      </div>
      <div>
        {Emojis.map((emoji: any) => {
          return (
            <h4
              className={classes.iconCategoryHeading}
              key={emoji.emojiActivities}
            >
              {emoji.category6}
            </h4>
          );
        })}
      </div>

      <div className={classes.emojiWrapper}>
        <div className={classes.emojiRow}>
          <div className={classes.emojis}>
            {Emojis.map((emoji: any) => {
              return (
                <a className={classes.emojiIcons} key={emoji.emojiActivities}>
                  {emoji.emojiActivities}
                </a>
              );
            })}
          </div>
        </div>
      </div>
      <div>
        {Emojis.map((emoji: any) => {
          return (
            <h4
              className={classes.iconCategoryHeading}
              key={emoji.emojiObjects}
            >
              {emoji.category7}
            </h4>
          );
        })}
      </div>

      <div className={classes.emojiWrapper}>
        <div className={classes.emojiRow}>
          <div className={classes.emojis}>
            {Emojis.map((emoji: any) => {
              return (
                <a className={classes.emojiIcons} key={emoji.emojiObjects}>
                  {emoji.emojiObjects}
                </a>
              );
            })}
          </div>
        </div>
      </div>
      <div>
        {Emojis.map((emoji: any) => {
          return (
            <h4
              className={classes.iconCategoryHeading}
              key={emoji.emojiSymbols}
            >
              {emoji.category8}
            </h4>
          );
        })}
      </div>

      <div className={classes.emojiWrapper}>
        <div className={classes.emojiRow}>
          <div className={classes.emojis}>
            {Emojis.map((emoji: any) => {
              return (
                <a className={classes.emojiIcons} key={emoji.emojiSymbols}>
                  {emoji.emojiSymbols}
                </a>
              );
            })}
          </div>
        </div>
      </div>
      <div>
        {Emojis.map((emoji: any) => {
          return (
            <h4 className={classes.iconCategoryHeading} key={emoji.emojiFlags}>
              {emoji.category9}
            </h4>
          );
        })}
      </div>

      <div className={classes.emojiWrapper}>
        <div className={classes.emojiRow}>
          <div className={classes.emojis}>
            {Emojis.map((emoji: any) => {
              return (
                <a className={classes.emojiIcons} key={emoji.emojiFlags}>
                  {emoji.emojiFlags}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default emojiList;
