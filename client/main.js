/*
 * File: main.js
 * Project: mix-test
 * File Created: Sunday, 3rd February 2019 11:08:28 pm
 * Author: Temitayo Bodunrin (temitayo@brandnaware.com)
 * -----
 * Last Modified: Monday, 4th February 2019 12:28:14 am
 * Modified By: Temitayo Bodunrin (temitayo@brandnaware.com)
 * -----
 * Copyright 2019, Brandnaware Nigeria
 */

import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

const App = props => {
  return (
    <div>
      <h1>Hello World and Here, Yay! it works</h1>
      <h2>Now go break a leg </h2>
      <p>I know you are creative, do thing the way you please.</p>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
