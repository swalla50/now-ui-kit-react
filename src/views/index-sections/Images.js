import React from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components

function Images() {
  return (
    <>
      <div className="section section-images">
        <Container>
          <Row>
            <Col md="12">
              <div className="hero-images-container">
                <img
                  alt="..."
                  src={require("assets/img/jmmpistons.png").default}
                ></img>
              </div>
            </Col>
          </Row>
          <div className="section section-tabs">
        <Container>
          <Row>
            
              <p className="category">About JM Motorsports</p>
              <Card style={{padding:"5%"}}>
                <CardHeader>
                  <h6 class="about-sub" style={{textAlign:"center"}}>Specializing in Corvettes | LS | Japanese vehicles and more.</h6>
                </CardHeader>
                <CardBody>              
                      <p>
                        I think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that
                        things could be at. So when you get something that has
                        the name Kanye West on it, it’s supposed to be pushing
                        the furthest possibilities. I will be the leader of a
                        company that ends up being worth billions of dollars,
                        because I got the answers. I understand culture. I am
                        the nucleus.
                      </p>
      
                </CardBody>
              </Card>
          </Row>
        </Container>
      </div>
        </Container>
      </div>
    </>
  );
}

export default Images;
