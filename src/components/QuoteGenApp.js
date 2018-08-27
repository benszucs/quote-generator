import React from 'react';
import Header from './Header';
import QuoteWidget from './QuoteWidget';

export default class QuoteGenApp extends React.Component {
  state = {
    url: 'https://talaikis.com/api/quotes/random/',
    quote: 'Hello World',
    author: 'Author'
  };
  handleFetchQuote = () => {
    fetch(this.state.url).then(results => {
      return results.json();
    }).then(data => {
      this.setState({
        quote: data.quote,
        author: data.author
      });
    })
  };
  componentDidMount() {
    this.handleFetchQuote();
  }
  render() {
    return (
      <div>
        <Header />
        <QuoteWidget
          quote={this.state.quote}
          author={this.state.author}
          handleFetchQuote={this.handleFetchQuote}
        />
      </div>
    )
  };
};
