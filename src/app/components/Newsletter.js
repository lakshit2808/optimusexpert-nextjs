import { useState } from "react";
import { Col, Row} from "react-bootstrap";
import axios from "axios";
import APIURL from "./APIURL";

export const Newsletter = ({onValidated}) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const PostReq = (name, email, endpoint) => {
    axios.post(`${APIURL}/${endpoint}`, {name:name, email: email})
      .then(res => alert.log(res))
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
    email.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email
    })
    PostReq(name, email, "oenewsletter");
    alert("Thank you for subscribing");
    setName('');
    setEmail('');
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
