// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import React, {useState} from "react";
import {Card, Row, Col, Button, Modal, Spinner} from "react-bootstrap";
import {API} from "aws-amplify";

function MainRequest(props) {
  const [json, setJson] = useState(null);
  const [show, setShow] = useState(false);

  async function handleSubmit() {
    setShow(true);
    const response = await getData();
    setJson(response);
  }

  function handleClose() {
    setJson(null);
    setShow(!show);
  }

  function getData() {
    const apiName = "MyBlogPostAPI";
    const path = "/Dev/blog";
    const myInit = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: props.token
      }
    };
    return API.get(apiName, path, myInit);
  }

  return (
    <>
      <Row>
        <Col sm={3}></Col>
        <Col sm={6}>
          <Card style={{width: "100%"}}>
            <Card.Body>
              <Card.Title>
                <h3 style={{textAlign: "center"}}>Hello </h3>
              </Card.Title>
              <Row>
                <Col sm={2}></Col>
                <Col sm={8}>
                  {" "}
                  <Button
                    variant="outline-success"
                    onClick={handleSubmit}
                    block
                  >
                    Call my mock API
                  </Button>
                </Col>
                <Col sm={2}> </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={3}></Col>
      </Row>
      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>
            <h3 style={{textAlign: "center"}}>Response</h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {json ? (
            <p>Here is the response: {json.message}</p>
          ) : (
            <h3 style={{textAlign: "center"}}>
              <Spinner animation="border" variant="primary" />
            </h3>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default MainRequest;
