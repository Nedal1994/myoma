import { useState } from "react";
import axios from "axios";
import "../css/ForgotPasswordScreen.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const forgotPasswordHandler = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    try {
      const { data } = await axios.post(
        "/api/auth/forgotpassword",
        { email },
        config
      );

      setSuccess(data.data);
    } catch (error) {
      setError(error.response.data.error);
      setEmail("");
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    // <div className="forgotpassword-screen">
    //   <form
    //     onSubmit={forgotPasswordHandler}
    //     className="forgotpassword-screen__form"
    //   >
    //     <h3 className="forgotpassword-screen__title">Forgot Password</h3>
    //     {error && <span className="error-message">{error}</span>}
    //     {success && <span className="success-message">{success}</span>}
    //     <div className="form-group">
    //       <p className="forgotpassword-screen__subtext">
    //         Please enter the email address you register your account with. We
    //         will send you reset password confirmation to this email
    //       </p>
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
    //     <button type="submit" className="btn btn-primary">
    //       Send Email
    //     </button>
    //   </form>
    // </div>
    <div>
      <Form onSubmit={forgotPasswordHandler} className='form'>
        <h3 className="forgotpass-title">Forgot Password</h3>

        {error && <span className="error-message">{error}</span>}
        {success && <span className="success-message">{success}</span>}
<br/>
        <Form.Group className="mb-3">
          
      <p className="subtext">
          Please enter the email address you register your account with. We
          will send you reset password confirmation to this email
           </p>

          <Form.Control
            type="email"
            required
            id="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group><br/>


        <Button variant="primary" type="submit" className="button">
          Send email
        </Button>
      </Form>
    </div>
  );
};

export default ForgotPasswordScreen;