import React from 'react';

require('./../../styles/_base.scss');

const Application = (props) => (
  <div>
    <div>{props.children}</div>
  </div>
);

export default Application;
