import React from 'react';

import Emojis from '../../emojisDb/emojisList.json';

import * as emojiClasses from './EmojiList.module.scss';

const EmojiList = (props: any) => {
  return (
    <div className={emojiClasses.contentWrapper}>
      <div className={emojiClasses.currentEmojiList}>
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
      <div className={emojiClasses.emojiList}>
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
      <div className={emojiClasses.emojiList}>
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
      <div className={emojiClasses.emojiList}>
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
                  <a className={emojiClasses.emojiIcons} key={emoji.emojiFood}>
                    {emoji.emojiFood}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className={emojiClasses.emojiList}>
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
      <div className={emojiClasses.emojiList}>
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
      <div className={emojiClasses.emojiList}>
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
      <div className={emojiClasses.emojiList}>
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
      <div className={emojiClasses.emojiList}>
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
                  <a className={emojiClasses.emojiIcons} key={emoji.emojiFlags}>
                    {emoji.emojiFlags}
                  </a>
                );
              })}
            </div>
          </div>
        </div>{' '}
      </div>
    </div>
  );
};

export default EmojiList;
