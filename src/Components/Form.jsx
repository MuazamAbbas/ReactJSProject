import React, {useState } from 'react';

const Form = () => {
  const [name, setName] = useState('');
  const[lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState("");
  const [lastNamenew, setLastNameNew] = useState("");

  const inputEvent = (event) => {
    setName(event.target.value);
  };

  const inputEventTwo = (event) =>{
      setFullName(event.target.value);
  }

  const onSubmit = (event) =>{
      event.preventDefault();
      setFullName(name);
      setLastNameNew(lastName)
  }


  return (
    <>
      <div>
      <form onSubmit={onSubmit}>
      <div>
        <h1>Hello {fullName} {lastNamenew} </h1>
        <input
          type="text"
          placeholder="Enter Your First Name" value={name}
          onChange={inputEvent}
        />
        <br />
        <input
          type="text"
          placeholder="Enter Your Last Name" value={lastName}
          onChange={inputEventTwo}
        />
        <button type='submit'> Click Me </button>
        </div>
        </form>
      </div>
    </>
  );
};

export default Form;
