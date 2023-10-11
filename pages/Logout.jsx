import React, { useRef, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { useNavigate } from "react-router-dom";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";

const Logout = () => {
  const emailRef = useRef();
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogout = () => {
    const email = emailRef.current.value;
  
    // Regular expression to check for a valid email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    // Check if email is valid
    if (email && emailPattern.test(email)) {
      // Logout successful, display a pop-up message
      window.alert("You have been logged out successfully!");
      navigate("/home");  // Redirect to home after successful logout
    } else {
      setError("Please enter a valid email to logout.");
    }
  };
  

  return (
    <Helmet title="Logout">
      <CommonSection title="Logout" />
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
                <button
                  type="button"
                  onClick={handleLogout}
                  className="addTOCart__btn"
                >
                  Logout
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

export default Logout;
