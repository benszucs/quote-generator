import React from 'react';
import Header from './Header';
import QuoteWidget from './QuoteWidget';

// font awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faSyncAlt, faShareSquare } from '@fortawesome/free-solid-svg-icons';

library.add(faQuoteLeft);
library.add(faSyncAlt);
library.add(faShareSquare);

export default class QuoteGenApp extends React.Component {
  state = {
    url: 'https://talaikis.com/api/quotes/random/',
    quote: 'Hello World',
    author: 'Author',
    tweetLink: 'https://twitter.com/intent/tweet?hashtags=quotes&text='
  };
  handleFetchQuote = () => {
    fetch(this.state.url).then(results => {
      return results.json();
    }).then(data => {
      const tweet = this.state.tweetLink + data.quote
      this.setState({
        quote: data.quote,
        author: data.author,
        tweet
      });
    })
  };
  componentDidMount() {
    this.handleFetchQuote();
  }
  render() {
    return (
      <div className="wrapper">
        <div className="quote-app">
          <div className="quote-app__box">
            <QuoteWidget
              quote={this.state.quote}
              author={this.state.author}
              handleFetchQuote={this.handleFetchQuote}
              tweet={this.state.tweet}
            />
          </div>
        </div>
      </div>
    )
  };
};
