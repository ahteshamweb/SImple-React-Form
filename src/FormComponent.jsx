import React, { useState } from "react";

const SimpleForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [validForm, setValidForm] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform form validation
    if (name.trim() === "" || email.trim() === "") {
      alert("Please fill in all the fields.");
      return;
    }

    // Proceed with form submission
    alert(`Name: ${name}\nEmail: ${email}`);
    setName("");
    setEmail("");
    setValidForm(false);
  };

  return (
    <div className="bg-green-200 min-h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-md p-8 shadow-md"
      >
        <h1 className="text-2xl font-bold text-green-600 mb-6">Simple Form</h1>
        <div className="mb-4">
          <label htmlFor="name" className="text-green-600">
            Name:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            className="w-full px-4 py-2 rounded border border-green-300 focus:outline-none focus:border-green-500"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="text-green-600">
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            className="w-full px-4 py-2 rounded border border-green-300 focus:outline-none focus:border-green-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SimpleForm;
