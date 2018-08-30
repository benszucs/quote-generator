import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const QuoteBox = (props) => {
  return (
    <div
      className="quote"
      style={props.randomColor}
    >
      <p className="quote--text">
        <span className="quote--icon"><FontAwesomeIcon icon="quote-left" /></span>
        <span>{props.quote}</span>
      </p>
      <p className="quote--author">- {props.author}</p>
    </div>
  );
};

export default QuoteBox;
