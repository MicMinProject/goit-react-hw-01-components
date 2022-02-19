import React from 'react';
/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react';
import PropTypes from 'prop-types';

function FriendListItem({ friend }) {
  const status = friend.isOnline ? 'green' : 'red';
  return (
    <li
      css={{
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '500px',
        height: '100px',
        marginBottom: '30px',
        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
        marginLeft: '20px',
      }}
      key={friend.id}
    >
      <span
        css={{
          display: 'block',
          width: '20px',
          height: '20px',
          borderRadius: '50%',
          backgroundColor: status,
          marginLeft: '20px',

        }}
      />
      <img
        css={{
          marginLeft: '20px',
          borderRadius: '10px',
          borderStyle: 'solid',
          borderWidth: '1px',
        }}
        src={friend.avatar}
        alt="User avatar"
        width="48"
      />
      <p css={{
        textTransform: 'none',
        marginLeft: '20px',
      }}>{friend.name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  friend: PropTypes.exact({
    id: PropTypes.number.isRequired,
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default FriendListItem;
