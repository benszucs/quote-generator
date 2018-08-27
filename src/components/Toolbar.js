import React from 'react';

const Toolbar = (props) => (
  <div>
    <button onClick={props.handleFetchQuote}>Generate</button>
    <button>Facebook</button>
    <button>Twitter</button>
  </div>
);

export default Toolbar;
