import React from 'react';
/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react';
import PropTypes from 'prop-types';

function Profile({
  avatar, username, tag, location, stats,
}) {
  return (
    <div
      css={{
        margin: 'auto',
        backgroundColor: '#eeeeee',
        width: '80%',
        padding: '10px',
      }}
    >
      <div
        css={{
          marginBottom: '20px',
          textAlign: 'center',
          textTransform: 'none',
        }}
      >
        <img
          css={{
            borderRadius: '50%',
            width: '300px',
          }}
          src={avatar}
          alt="User avatar"
        />
        <p className="name">{username}</p>
        <p
          css={{
            color: '#999',
          }}
        >
          @
          {tag}
        </p>
        <p
          css={{
            color: '#999',
          }}
        >
          {location}
        </p>
      </div>

      <ul
        css={{
          display: 'flex',
          listStyle: 'none',
          justifyContent: 'center',
          textTransform: 'none',
        }}
      >
        <li
          css={{
            padding: '20px',
            borderStyle: 'solid',
            width: '212px',
          }}
        >
          <span
            css={{
              display: 'block',
              textAlign: 'center',
            }}
          >
            Followers
          </span>
          <span
            css={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            {stats.followers}
          </span>
        </li>
        <li
          css={{
            padding: '20px',
            borderStyle: 'solid',
            width: '212px',
            borderLeft: '0px',
            borderRight: '0px',
          }}
        >
          <span
            css={{
              display: 'block',
              textAlign: 'center',
            }}
          >
            Views
          </span>
          <span
            css={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            {stats.views}
          </span>
        </li>
        <li
          css={{
            width: '212px',
            padding: '20px',
            borderStyle: 'solid',
          }}
        >
          <span
            css={{
              display: 'block',
              textAlign: 'center',
            }}
          >
            Likes
          </span>
          <span
            css={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            {stats.likes}
          </span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  avatar: PropTypes.string,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string,
  stats: PropTypes.objectOf(PropTypes.number),
};

export default Profile;
