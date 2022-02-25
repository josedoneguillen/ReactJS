import React from 'react';
import {Form} from './elements/Forms';

const App = () => {
  return (
    <main>
      <Form action="">
        <div>
          <label htmlFor="">User</label>
          <input type="text" placeholder="Username" />
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div>
          <label htmlFor="">User</label>
          <input type="text" placeholder="Username" />
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </Form>
    </main>
  );
}

export default App;