
import { useState } from "react";
import axios from "axios";
import "../css/RegisterScreen.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

const RegisterScreen = ({ history }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const registerHandler = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    if (password !== confirmpassword) {
      setPassword("");
      setConfirmPassword("");
      setTimeout(() => {
        setError("");
      }, 5000);
      return setError("Passwords do not match");
    }

    try {
      const { data } = await axios.post(
        "/api/auth/register",
        {
          username,
          email,
          password,
        },
        config
      );

      localStorage.setItem("authToken", data.token);

      history.push("/");
    } catch (error) {
      setError(error.response.data.error);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    // <div className="register-screen">
    //   <form onSubmit={registerHandler} className="register-screen__form">
    //     <h3 className="register-screen__title">Register</h3>
    //     {error && <span className="error-message">{error}</span>}
    //     <div className="form-group">
    //       <label htmlFor="name">Username:</label>
    //       <input
    //         type="text"
    //         required
    //         id="name"
    //         placeholder="Enter username"
    //         value={username}
    //         onChange={(e) => setUsername(e.target.value)}
    //       />
    //     </div>
    //     <div className="form-group">
    //       <label htmlFor="email">Email:</label>
    //       <input
    //         type="email"
    //         required
    //         id="email"
    //         placeholder="Email address"
    //         value={email}
    //         onChange={(e) => setEmail(e.target.value)}
    //       />
    //     </div>
    //     <div className="form-group">
    //       <label htmlFor="password">Password:</label>
    //       <input
    //         type="password"
    //         required
    //         id="password"
    //         autoComplete="true"
    //         placeholder="Enter password"
    //         value={password}
    //         onChange={(e) => setPassword(e.target.value)}
    //       />
    //     </div>
    //     <div className="form-group">
    //       <label htmlFor="confirmpassword">Confirm Password:</label>
    //       <input
    //         type="password"
    //         required
    //         id="confirmpassword"
    //         autoComplete="true"
    //         placeholder="Confirm password"
    //         value={confirmpassword}
    //         onChange={(e) => setConfirmPassword(e.target.value)}
    //       />
    //     </div>
    //     <button type="submit" className="btn btn-primary">
    //       Register
    //     </button>

    //     <span className="register-screen__subtext">
    //       Already have an account? <a href="/login">Login</a>
    //     </span>
    //   </form>
    // </div>
    <div>
      <Form onSubmit={registerHandler} className='form'>
        <h3 className="register-title">Register</h3><br/>
        {error && <span className="error-message">{error}</span>}

        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>

          <Form.Control
            type="text"
            required
            id="name1"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
      
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>

          <Form.Control
            type="email"
            required
            id="email1"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control 
            type="password"
            required
            id="password1"
            autoComplete="true"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control 
            type="password"
            required
            id="confirmpassword1"
            autoComplete="true"
            placeholder="Confirm password"
            value={confirmpassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </Form.Group><br/>

        <Button variant="primary" type="submit" className="button1">
          Register
        </Button><br/><br/>

        <span className="register-screen__subtext">
          Already have an account? <a href="/login">Login</a>
        </span>
      </Form>
    </div>
  );
};

export default RegisterScreen;