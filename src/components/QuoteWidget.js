import React from 'react';
import QuoteBox from './QuoteBox';
import Toolbar from './Toolbar';

const QuoteWidget = (props) => (
  <div>
    <QuoteBox
      quote={props.quote}
      author={props.author}
      randomColor={props.randomColor}
    />
    <Toolbar
      handleFetchQuote={props.handleFetchQuote}
      tweet={props.tweet}
      randomColor={props.randomColor}
    />
  </div>
);

export default QuoteWidget;
