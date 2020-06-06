import React from 'react';
import ReactDOM from 'react-dom';

import './example.css';
import { Checkmark } from 'src/checkmark';

export const App = () => {
  const sizes = ['small', 'medium', 'large', 'xLarge', 'xxLarge'];
  return (
    <div>
      <div className={'showcase d-flex'}>
        <h3 className='w-25'></h3>
        <h3 className='w-25'></h3>
        <h3 className='w-25'>color='blue'</h3>
        <h3 className='w-25'>color='#223344'</h3>
      </div>
      {sizes.map((size) => {
        return (
          <div className={'showcase d-flex'}>
            <h3 className='w-25'>size='{size}'</h3>
            <Checkmark className='w-25' size={size} />
            <Checkmark className='w-25' size={size} color={'blue'} />
            <Checkmark className='w-25' size={size} color={'#223344'} />
          </div>
        );
      })}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
