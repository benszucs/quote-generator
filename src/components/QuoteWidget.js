import React from 'react';
import QuoteBox from './QuoteBox';
import Toolbar from './Toolbar';

const QuoteWidget = (props) => (
  <div>
    <QuoteBox
      quote={props.quote}
      author={props.author}
    />
    <Toolbar
      handleFetchQuote={props.handleFetchQuote}
    />
  </div>
);

export default QuoteWidget;
