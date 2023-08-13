import { Col } from "react-bootstrap";
import Image from "next/image";

export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <Image src={imgUrl} alt="img"/>
        <div className="proj-txtx">
          <h3>{title}</h3>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}
