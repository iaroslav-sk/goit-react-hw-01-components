import React from 'react';
import FriendListItem from './FriendListItem';
import PropTypes from 'prop-types';
import style from './FriendList.module.css';

const FriendList = ({ friends }) => (
  <ul className={style.list}>
    {friends.map(friend => (
      <li key={friend.id} className={style.item}>
        <FriendListItem friends={friend} isOnline={friend.isOnline} />
      </li>
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};

export default FriendList;
