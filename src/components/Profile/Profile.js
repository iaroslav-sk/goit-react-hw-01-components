// Default //
import React from 'react';
// Component //
import PropTypes from 'prop-types';
// style //
import styles from './Profile.module.css';

const Profile = ({ name, tag, location, avatar, stats }) => (
  <div className={styles.ProfileWrapp}>
    <div className={styles.ProfileAbout}>
      <img src={avatar} alt="Аватар пользователя" width="240" height="240" />
      <p>{name}</p>
      <p>{tag}</p>
      <p>{location}</p>
    </div>

    <ul className={styles.list}>
      <li className={styles.item}>
        <span>Followers</span>
        <span>{stats.followers}</span>
      </li>
      <li className={styles.item}>
        <span>Views</span>
        <span>{stats.views}</span>
      </li>
      <li className={styles.item}>
        <span>Likes</span>
        <span>{stats.likes}</span>
      </li>
    </ul>
  </div>
);

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};

export default Profile;
