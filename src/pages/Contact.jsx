import React, { useState } from "react";
import "../styles/Contact.scss";
import Girl from "../assets/girlgym.jpg";
import FormInput from "../components/FormInput";

const Contact = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be 3-16 characters and should't include any special character!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "it's should be valid email",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include atleast 1 letter, 1 number & 1 speical character ",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 4,
      name: "ConfirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Password don't match!",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
  ];

  const handleSubmt = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="contact">
      <div className="left">
        <img src={Girl} alt="" />
      </div>
      <div className="right">
        <form onSubmit={handleSubmt}>
          <h1>Register</h1>
          {inputs.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}

          <button>SUBMIT</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
