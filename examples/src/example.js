import React from 'react';
import ReactDOM from 'react-dom';
import { Checkmark } from 'src/checkmark';

import './example.css';

function App() {
  const sizes = ['small', 'medium', 'large', 'xLarge', 'xxLarge', 96, 144];
  return (
    <div>
      <div className={'showcase d-flex'}>
        <h3 className='w-25'></h3>
        <h3 className='w-25 text-center'>default</h3>
        <h3 className='w-25 text-center'>color='blue'</h3>
        <h3 className='w-25 text-center'>color='#223344'</h3>
      </div>
      {sizes.map((size, i) => {
        return (
          <div className={'showcase d-flex'} key={i}>
            <h3 className='w-25'>
              size={typeof size === 'string' ? `'${size}'` : `${size}px`}
            </h3>
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
