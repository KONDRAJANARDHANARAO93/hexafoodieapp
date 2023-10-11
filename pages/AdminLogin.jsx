import React, { useRef, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { useNavigate } from 'react-router-dom'; // Import useNavigate
//import { authenticateAdmin } from '../components/services/authService'; // Import authenticateAdmin from authService

const AdminLogin = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Get the navigate function

  const handleLogin = () => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    // Hardcoded admin credentials for demonstration
    const hardcodedAdminEmail = "janardhanaraokondra@gmail.com";
    const hardcodedAdminPassword = "Janardhanarao@93";

    // Check if email and password match the hardcoded admin credentials
    if (email === hardcodedAdminEmail && password === hardcodedAdminPassword) {
      // Login successful, display a pop-up message
      window.alert("Admin login successful!");
      // Authenticate as admin and redirect to the admin page
      //authenticateAdmin();
      navigate('/Home'); // Replace with the actual admin page path
    } else {
      setError("Invalid email or password. Please try again.");
    }
  };

  return (
    <Helmet title="Admin Login">
      <CommonSection title="Admin Login" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12" className="m-auto text-center">
              <form className="form mb-5">
                <div className="form__group">
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    ref={emailRef}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    ref={passwordRef}
                  />
                </div>
                <button
                  type="button"
                  onClick={handleLogin}
                  className="addTOCart__btn"
                >
                  Login
                </button>
              </form>
              {error && <p className="error-message">{error}</p>}
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default AdminLogin;
