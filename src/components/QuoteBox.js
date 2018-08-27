import React from 'react';

const QuoteBox = (props) => (
  <div>
    <p>{props.quote}</p>
    <p>{props.author}</p>
  </div>
);

export default QuoteBox;
