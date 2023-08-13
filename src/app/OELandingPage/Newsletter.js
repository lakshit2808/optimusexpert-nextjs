import { useState } from "react";
import { Col, Row} from "react-bootstrap";

export const Newsletter = ({onValidated}) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const PostReq = (data) => {
    fetch('/api/newslettersheet', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
    email.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email
    })
    PostReq({Name: name, Email: email});
    setName('');
    setEmail('');
    location.reload
  }


  return (
      <Col lg={12}>
        <div className="newsletter-bx wow slideInUp">
          <Row>
            <Col lg={12} md={6} xl={5}>
              <h3 id="newsletter-text">Subscribe to our Newsletter<br></br> & Never miss latest updates</h3>
            </Col>
            <Col md={6} xl={7}>
              <form onSubmit={handleSubmit}>
                
                <div className="new-email-bx">
                  <div className="newsletter-form">
                  <input required value={name} type="text" onChange={(e) => setName(e.target.value)} placeholder="Name" />
                  </div>
                  <div id="newsletter-line">|</div>
                  <div className="newsletter-form">
                  <input required value={email} type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" />
                  </div>
                  <div className="newsletter-form-submit">
                  <button type="submit">Submit</button>
                  </div>

                </div>
              </form>
            </Col>
          </Row>
        </div>
      </Col>
  )
}
