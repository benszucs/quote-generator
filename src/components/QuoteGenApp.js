import React from 'react';
import Header from './Header';
import QuoteWidget from './QuoteWidget';

export default class QuoteGenApp extends React.Component {
  state = {
    test: undefined
  };
  render() {
    return (
      <div>
        <Header />
        <QuoteWidget />
      </div>
    )
  };
};
