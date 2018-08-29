import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const QuoteBox = (props) => (
  <div className="quote">
    <p className="quote--text">
      <span className="quote--icon"><FontAwesomeIcon icon="quote-left" /></span>
      <span>{props.quote}</span>
    </p>
    <p className="quote--author">- {props.author}</p>
  </div>
);

export default QuoteBox;
