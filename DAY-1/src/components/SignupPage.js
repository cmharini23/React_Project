
import React, { useState } from 'react';


const SignupPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    
  };

  return (
    <div class="bg">

    <div className="signup-container">
      <h2>REGISTER HERE!</h2>
      <form onSubmit={handleSignup}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleInputChange}
          required
        />
        <br />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange}
          required
        />
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
    </div>
  );
};

export default SignupPage;
