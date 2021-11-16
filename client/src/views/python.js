import axios from "axios";
import React, { useState } from "react";
import { navigate, Link } from "@reach/router";
import { Nav, Navbar, Form, Button } from "react-bootstrap";
import MessageForm from "../components/messageForm";
import MessageDisplay from "./messageDisplay";

const Python = (props) => {
  const { messageList, setMessageList } = props;
  const [newPythonMessage, setNewPythonMessage] = useState({
    addMessage: "",
  });

  const [errors, setErrors] = useState({});

  const newMessageHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/chatrooms", newPythonMessage)
      .then((res) => {
        console.log(res);
        setMessageList([...messageList, res.data]);

        setNewPythonMessage({
          addMessage: "",
        });
      })
      .catch((err) => {
        setErrors(err.response.data.errors);
      });
  };
  return (
    <div>
      <div className="main-container">
        <div>
          <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="#">Group Project</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav className="justify-content-center" navbarScroll>
                <Nav.Link href="/chatrooms">Home</Nav.Link>
                <Nav.Link href="/python">Python</Nav.Link>
                <Nav.Link href="/mern">MERN</Nav.Link>
                <Nav.Link href="/java">Java</Nav.Link>
                <Nav.Link href="/algos">Algos</Nav.Link>
                <Nav.Link href="/help">Help</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
      <h1>Python Chatroom</h1>
      <h1>Hi - NAME</h1>
      <div>
        <MessageDisplay
        // display={}
        // setDisplay={}
        />
      </div>
      <div>
        <MessageForm
          message={newPythonMessage}
          setMessage={setNewPythonMessage}
          errors={errors}
          onSubmitHandler={newMessageHandler}
        />
      </div>
    </div>
  );
};

export default Python;
