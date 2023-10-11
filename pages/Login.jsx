import React, { useRef, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";

const Login = () => {
  const loginNameRef = useRef();
  const loginPasswordRef = useRef();
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();

    // Get the values entered by the user
    const email = loginNameRef.current.value;
    const password = loginPasswordRef.current.value;

    // Check if email or password is empty
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    // Assume login is successful for this example
    // You should replace this with your actual login logic
    const loginSuccessful = true;

    if (loginSuccessful) {
      window.alert("Login successful!"); // Display a pop-up message for successful login
      navigate('/foods');  // Redirect to the menu page
    }
  };

  return (
    <Helmet title="Login">
      <CommonSection title="Login" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12" className="m-auto text-center">
              <form className="form mb-5" onSubmit={submitHandler}>
                <div className="form__group">
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    ref={loginNameRef}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    ref={loginPasswordRef}
                  />
                </div>
                <button type="submit" className="addTOCart__btn">
                  Login
                </button>
              </form>
              {error && <p className="error-message">{error}</p>}
              <Link to="/register">
                Don't have an account? Create an account
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Login;
