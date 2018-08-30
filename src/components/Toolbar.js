import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Toolbar = (props) => {
  return (
    <div
      className="toolbar"
      style={props.randomColor}
    >
      <a
        onClick={props.handleFetchQuote}
      >
        <FontAwesomeIcon icon="sync-alt" />
      </a>
      <a
        href={props.tweet} target="_blank"
        style={props.randomColor}
      >
        <FontAwesomeIcon icon="share-square" />
      </a>
    </div>
  );
};

export default Toolbar;
