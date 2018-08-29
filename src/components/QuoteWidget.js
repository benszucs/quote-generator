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
      tweet={props.tweet}
    />
  </div>
);

export default QuoteWidget;
