import React from 'react';
import styled from 'styled-components';

const App = () => {
  return (
    <main>
      <Form action="">
        <label htmlFor="">User</label>
        <input type="text" placeholder="Username" />
        <p>Lorem ipsum dolor sit amet.</p>
      </Form>
    </main>
  );
}

const Form = styled.form`
padding: 4em;
background: papayawhip;
`;

export default App;