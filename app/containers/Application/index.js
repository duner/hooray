import React from 'react';

// require('./../../styles/_base.scss');

const Application = (props) => (
  <div>
    <div className="app-root">{props.children}</div>
  </div>
);

export default Application;
