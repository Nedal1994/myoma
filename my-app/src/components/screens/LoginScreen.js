import { useState, useEffect } from "react";
import axios from "axios";
import "../css/LoginScreen.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

const LoginScreen = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      history.push("/");
    }
  }, [history]);

  const loginHandler = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    try {
      const { data } = await axios.post(
        "/api/auth/login",
        { email, password },
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
    <div>
      {/* <form onSubmit={loginHandler} className="login-screen__form">
        <h3 className="login-screen__title">Login</h3>

        {error && <span className="error-message">{error}</span>}

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            required
            id="email"
            placeholder="Email address"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            tabIndex={1}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">
            Password:{" "}
            <a href="/forgotpassword" className="login-screen__forgotpassword">
              Forgot Password?
            </a>
          </label>
          <input
            type="password"
            required
            id="password"
            autoComplete="true"
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            tabIndex={2}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>

        <span className="login-screen__subtext">
          Don't have an account? <a href="/register">Register</a>
        </span>
      </form> */}

       <Form onSubmit={loginHandler} className='form'>
        <h3 className="login-title">Login</h3><br/>
        {error && <span className="error-message">{error}</span>}
      <Form.Group className="mb-3" controlId="formBasicEmail">
        
        <Form.Label>Email address</Form.Label>
        
          <Form.Control
            type="email"
            required
            id="email2"
            placeholder="Email address"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            tabIndex={1} />

        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>


      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>

          <Form.Control
            type="password"
            required
            id="password2"
            autoComplete="true"
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            tabIndex={2} />

      </Form.Group>

      <Form.Group className="mb-3">
      <label htmlFor="password">
            <a href="/forgotpassword" className="login-screen__forgotpassword">
              Forgot Password?
            </a>
          </label>
      </Form.Group>

      <Button variant="primary" type="submit" className="button2">
        Login
      </Button><br/><br/>

      <span className="login-screen__subtext">
          Don't have an account? <a href="/register">Register</a>
        </span>
      </Form>
    </div>
  );
};

export default LoginScreen;