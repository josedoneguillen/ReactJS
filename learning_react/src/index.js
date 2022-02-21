import React from 'react';
import ReactDOM from 'react-dom';

const name = 'Jose';
const JSX = (
  <div>
    <h1 className="main-title">Hello {name}!</h1>
    <p className="main-paragraph">Have a nice day</p>
  </div>
);

ReactDOM.render(JSX,
  document.getElementById('root')
);
