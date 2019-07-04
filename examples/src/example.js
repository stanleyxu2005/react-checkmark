import React from 'react';
import ReactDOM from 'react-dom';

import './example.less';
import { Checkmark } from '../../src/checkmark';

export const App = () => {
  const sizes = ['small', 'medium', 'large', 'xLarge', 'xxLarge'];
  return (
    <div>
      {sizes.map((size) => {
        return (
          <div className={'showcase'}>
            <h3>size={size}</h3>
            <Checkmark size={size} />
          </div>
        );
      })}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
