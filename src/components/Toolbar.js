import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Toolbar = (props) => (
  <div className="toolbar">
    <a onClick={props.handleFetchQuote}><FontAwesomeIcon icon="sync-alt" /></a>
    <a href={props.tweet} target="_blank"><FontAwesomeIcon icon="share-square" /></a>
  </div>
);

export default Toolbar;
