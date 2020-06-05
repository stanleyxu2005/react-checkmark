import React from 'react';
import ReactDOM from 'react-dom';

import './example.css';
import { Checkmark } from 'src/checkmark';

export const App = () => {
  const sizes = ['small', 'medium', 'large', 'xLarge', 'xxLarge'];
  return (
    <div>
      {sizes.map((size) => {
        return (
          <div className={'showcase d-flex'}>
            <h3 className='w-33'>size={size}</h3>
            <Checkmark className='w-33' size={size}/>
            <Checkmark className='w-33' size={size} color={'blue'}/>
          </div>
        );
      })}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
