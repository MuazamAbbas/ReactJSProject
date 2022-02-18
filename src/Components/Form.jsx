import React, { useState } from 'react';

const Form = () => {
  const [fullName, setFullName] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    qualification: "",
  }); 

  const inputEvent = (event) => {

    // const value = event.target.value;
    // const name = event.target.name;

    const {value, name} = event.target;

    setFullName((preValue) => {

return{
  ...preValue,
  [name]: value,
}

      // if (name === "fName") {
      //   return {
      //     fName: value,
      //     lName: preValue.lName,
      //     email: preValue.email,
      //     phone: preValue.phone,
      //   };
      // } else if (name === "lName") {
      //   return {
      //     fName: preValue.fName,
      //     lName: value,
      //     email: preValue.email,
      //     phone: preValue.phone,
      //   };
      // } else if (name === "email") {
      //   return {
      //     fName: preValue.fName,
      //     lName: preValue.lName,
      //     email: value,
      //     phone: preValue.phone,
      //   };
      // } else if (name === "phone") {
      //   return {
      //     fName: preValue.fName,
      //     lName: preValue.lName,
      //     email: preValue.email,
      //     phone: value,
      //   };
      // }
    });

  };


  const onSubmit = (event) => {
    event.preventDefault();
    alert("Form submitted")
  }


  return (
    <>
      <div>
        <form onSubmit={onSubmit}>
          <div>
            <h1>Hello {fullName.fname} {fullName.lname}</h1>
            <p>{fullName.email}</p>
            <p>{fullName.phone}</p>
            <p>{fullName.qualification}</p>
            <input
              type="text"
              placeholder="Enter Your First Name" value={fullName.fname} name="fname"
              onChange={inputEvent}
            />
            <br />
            <input
              type="text"
              placeholder="Enter Your Last Name" value={fullName.lname} name="lname"
              onChange={inputEvent}
            />
            <input
              type="email"
              placeholder="Enter Your Email" value={fullName.email} name="email"
              onChange={inputEvent}
            />
            <input
              type="number"
              placeholder="Enter Your Phone" value={fullName.phone} name="phone"
              onChange={inputEvent}
            />
            <input
              type="text"
              placeholder="Enter Your Qualification" value={fullName.qualification} name="qualification"
              onChange={inputEvent}
            />
            <button type='submit'> Click Me </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
