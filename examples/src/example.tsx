import React from 'react';
import ReactDOM from 'react-dom';

import Checkmark, { Sizes } from '../../src/checkmark';

export const App = () => {
  const sizes: Sizes[] = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'];
  return (
    <div style={{ textAlign: 'center', fontFamily: 'Arial' }}>
      <h1>react-typescript-checkmark</h1>
      {sizes.map((size, index) => {
        return (
          <div style={{ marginBottom: '45px' }} key={sizes[index]}>
            <h3>{size}</h3>
            <Checkmark size={size} backgroundColor='black' />
          </div>
        );
      })}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
