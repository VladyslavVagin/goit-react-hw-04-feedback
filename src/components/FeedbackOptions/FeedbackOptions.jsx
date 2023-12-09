import React from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({options, onLeaveFeedback}) => {
  return (
      <ul className={css.buttonList}>
        {options.map(option => {
          return (
            <li key={option}>
              <button
                type="button"
                onClick={()=>onLeaveFeedback(option)}
                >
                {option}
              </button>
            </li>
          );
        })}
      </ul>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
};

export default FeedbackOptions;
