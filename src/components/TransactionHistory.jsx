import React from 'react';
/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react';
import PropTypes from 'prop-types';

function TransactionHistory({ items }) {
  return (
    <table
      css={{
        display: 'inline-block',
        fontSize: '20px',
        textTransform: 'none',
        maxWidth: '1200px',
      }}
    >
      <thead
        css={{
          color: '#fff',
          display: 'block',
        }}
      >
        <tr
          css={{
            height: '60px',
            display: 'flex',
          }}
        >
          <th
            css={{
              width: '400px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderStyle: 'solid',
              borderColor: '#dbdbdb',
              borderWidth: '1px',
              backgroundColor: '#4A8CFF',
            }}
          >
            TYPE
          </th>
          <th
            css={{
              width: '400px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderStyle: 'solid',
              borderColor: '#dbdbdb',
              borderWidth: '1px',
              backgroundColor: '#4A8CFF',
            }}
          >
            AMOUNT
          </th>
          <th
            css={{
              width: '400px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderStyle: 'solid',
              borderColor: '#dbdbdb',
              borderWidth: '1px',
              backgroundColor: '#4A8CFF',
            }}
          >
            CURRENCY
          </th>
        </tr>
      </thead>

      <tbody
        css={{
          display: 'block',
        }}
      >
        {items.map((item) => (
          <tr
            css={{
              display: 'flex',
              height: '60px',
              '&:nth-child(even)':
              { backgroundColor: '#e6e6e6' },
            }}
            key={item.id}
          >
            <td
              css={{
                width: '400px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderStyle: 'solid',
                borderColor: '#dbdbdb',
                borderWidth: '1px',
                textTransform: 'capitalize',
              }}
            >
              {item.type}
            </td>
            <td
              css={{
                width: '400px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderStyle: 'solid',
                borderColor: '#dbdbdb',
                borderWidth: '1px',
              }}
            >
              {item.amount}
            </td>
            <td
              css={{
                width: '400px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderStyle: 'solid',
                borderColor: '#dbdbdb',
                borderWidth: '1px',
              }}
            >
              {item.currency}
            </td>
          </tr>
        ))}

      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  })).isRequired,
};

export default TransactionHistory;
