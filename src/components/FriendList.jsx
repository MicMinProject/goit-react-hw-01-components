import React from 'react';
/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react';
import PropTypes from 'prop-types';

import FriendListItem from './FriendListItem';

function FriendList({ friends }) {
  return (
    <ul className="friend-list">
      {friends.map((friend) => (<FriendListItem friend={friend} />))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.number.isRequired,
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
  })).isRequired,
};

export default FriendList;
