import React from 'react';
/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react';
import PropTypes from 'prop-types';

function Statistics({ title, stats }) {
  const randomColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  return (
    <section css={{
      marginBottom: '20px',
    }}
    >
      {title !== '' ? (
        <h2 css={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '20px',
          marginBottom: '20px',
        }}
        >
          {title}
        </h2>
      ) : (<h2 className="title" style={{ display: 'none' }}>{title}</h2>)}

      <ul css={{
        display: 'flex',
        justifyContent: 'center',
        listStyle: 'none',
      }}
      >
        {stats.map((stat) => (

          <li
            key={stat.id}
            css={{
              padding: '40px',
              backgroundColor: randomColor(),
            }}
          >
            <span css={{
              display: 'block',
            }}
            >
              {stat.label}

            </span>
            <span css={{
              display: 'flex',
              justifyContent: 'center',
            }}
            >
              {stat.percentage}
              %
            </span>
          </li>
        ))}
      </ul>
    </section>

  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.string,
    label: PropTypes.string,
    percentage: PropTypes.number,
  })).isRequired,
};

export default Statistics;
