import { Col, Container, Image, Row } from "react-bootstrap";

const SingleComment = (props) => {
  return (
    <>
      <Container fluid>
        {props.comments.map((comment, index) => (
          <Row key={index}>
            <Col xs={2}>
              <Image fluid className="rounded-circle" src="https://s3-eu-west-1.amazonaws.com/tpd/logos/62a6277627ee655c1226b624/0x0.png" />
            </Col>
            <Col xs={10}>
              <strong>{comment.author}</strong>
              <p>{comment.comment}</p>
            </Col>
          </Row>
        ))}
      </Container>
    </>
  );
};
export default SingleComment;
