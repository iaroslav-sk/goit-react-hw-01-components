import React, { Fragment } from 'react';
import style from './FriendList.module.css';

const FriendListItem = ({ friends, isOnline }) => {
  return (
    <>
      <span className={isOnline ? style.isOnline : style.isOnlineFalse}>
        {friends.isOnline}
      </span>
      <img src={friends.avatar} alt={friends.name} width="48" />
      <p>{friends.name}</p>
    </>
  );
};

export default FriendListItem;
