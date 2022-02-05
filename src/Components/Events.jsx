import React, { useState } from 'react';

const Events = () => {
  const purple = '#8e44ad';
  const [bg, setBg] = useState(purple);
  const [name, setName] = useState('CLICK ME');

  const bgChange = () => {
    let newBG = '#34495e';
    setBg(newBG);
    setName('OUCH!!');
  };

  const bgBack = () => {
    setBg(purple);
    setName('AYYO!!');
  };

  return (
    <>
      <div style={{ backgroundColor: bg }}>
        <button onClick={bgChange} onDoubleClick={bgBack}>
          {name}
        </button>
      </div>
    </>
  );
};

export default Events;
