import React from "react";

const Signup = () => {
  return (
    <>
      <div className="signup-wrapper">
        <div className="sign-up-container">
          <form>
            <h1 className="signup-header">Create Account</h1>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button className="submit-button" type="submit">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
