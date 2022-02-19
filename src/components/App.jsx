import React from 'react';
import { Global, css } from '@emotion/react';
import emotionNormalize from 'emotion-normalize';
// Task 1
import user from '../data/user.json';
import Profile from './Profile';
// Task2
import data from '../data/data.json';
import Statistics from './Statistics';
// Task3
import friends from '../data/friends.json';
import FriendList from './FriendList';
// Task4
import transactions from '../data/transactions.json';
import TransactionHistory from './TransactionHistory';

export function App() {
  const {
    username, tag, avatar, location, stats,
  } = user;
  return (

    <div
      style={{
        height: '100vh',
        display: 'block',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        textTransform: 'uppercase',
        color: '#010101',
      }}
    >
      <Global
        styles={css`
      ${emotionNormalize}
      html,
      ul,p,a,h1,h2,h3,
      body {
        padding: 0;
        margin: 0;
      }
    `}
      />
      <Profile
        username={username}
        tag={tag}
        avatar={avatar}
        location={location}
        stats={stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}
