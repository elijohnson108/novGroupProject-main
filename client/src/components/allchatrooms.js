import React, { Component, useEffect, useState } from "react";
import { navigate, Link } from "@reach/router";
import axios, { Axios } from "axios";
import { CardGroup, Card, Button, Navbar, Nav } from "react-bootstrap";
import java from "./css/img/java-icon-png-2.png";
import pyicon from "./css/img/python-icon.png";
import mernIcon from "./css/img/mern-icon-png.png";
import algos from "./css/img/algo-icon.jpeg";

const AllChatRooms = (props) => {
  const [allChatRooms, setAllChatRooms] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/chatrooms")
      .then((res) => {
        console.log(res);
        setAllChatRooms(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="main-container">
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#">Group Project</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="justify-content-center" navbarScroll>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/python">Python</Nav.Link>
            <Nav.Link href="/mern">MERN</Nav.Link>
            <Nav.Link href="/java">Java</Nav.Link>
            <Nav.Link href="/algos">Algos</Nav.Link>
            <Nav.Link href="/help">Help</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <h1 className="text-center app-title display-1">Title of App</h1>

      <CardGroup className="card-group">
        <Card>
          <Card.Img
            style={{
              height: "auto",
              width: "240px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
            variant="top"
            src={java}
          />
          <Card.Body>
            <Card.Title>Java</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
            <Nav.Link href="/java">
                <Button variant="secondary">Java Board</Button>
            </Nav.Link>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" className="card-img" src={mernIcon} />
          <Card.Body>
            <Card.Title>MERN</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to
              additional content.{" "}
            </Card.Text>
            <Nav.Link href="/mern">
                <Button variant="secondary">MERN Board</Button>
            </Nav.Link>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src={pyicon} />
          <Card.Body>
            <Card.Title>Python</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </Card.Text>
            <Nav.Link href="/python">
                <Button variant="secondary">Python Board</Button>
            </Nav.Link>
          </Card.Body>
        </Card>
      </CardGroup>
      <CardGroup>
        <Card className="algo-card">
          <Card.Img
            style={{
              width: "300px",
              height: "auto",
              marginLeft: "auto",
              marginRight: "auto",
            }}
            variant="top"
            src={algos}
          />
          <Card.Body>
            <Card.Title>Algos</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
            <Nav.Link href="/algos">
                <Button variant="secondary">Algos Board</Button>
            </Nav.Link>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  );
};

export default AllChatRooms;
