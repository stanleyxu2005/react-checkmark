import React from 'react';
import ReactDOM from 'react-dom';
import { Checkmark, PREDEFINED_SIZE_MAP } from 'src/checkmark';

import './example.css';

function App() {
  const sizes = [undefined, 16].concat(Object.keys(PREDEFINED_SIZE_MAP));

  return (
    <div>
      <div className='showcase d-flex'>
        <h3 className='w-25'>size values</h3>
        <h3 className='w-25 text-center'>default color</h3>
        <h3 className='w-25 text-center'>color='blue'</h3>
        <h3 className='w-25 text-center'>color='#223344'</h3>
      </div>
      {sizes.map((size, i) => {
        return (
          <div className={'showcase d-flex'}>
            <h3 className='w-25'>
              #{i} &nbsp; size='
              {typeof size === 'number' ? `${size}px` : size}'
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
