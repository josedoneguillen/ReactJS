import React from 'react';
import ReactDOM from 'react-dom';

const name = 'Jose';
const session = true;
const JSX = (
  <div>
    <h1 className="main-title" style={{color: 'teal'}}>Hello {name}!</h1>
    <p className="main-paragraph">Have a nice day</p>
  </div>
);

const validateSession = (session) => {
  if(session === true){
      return JSX;
  } else {
    return <h1>You have not logged in</h1>
  }
}

ReactDOM.render(validateSession(session),
  document.getElementById('root')
);
