import axios from "axios";
import React, { useState, useEffect } from "react";
import { navigate, Link } from "@reach/router";
import MessageForm from "./messageForm";

const EditMessage = (props) => {
  const { _id } = props;
  const [updateMessage, setUpdateMessage] = useState({
    addMessage: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:8000/api/chatrooms/${_id}`).then((res) => {
      setUpdateMessage(res.data);
    });
  }, []);

  const updateHandler = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/api/chatrooms/${_id}`, updateMessage)
      .then((res) => navigate("/"))
      .catch((err) => {
        setErrors(err.response.data.errors);
      });
  };

  return (
    <div>
      <MessageForm
        message={updateMessage}
        setMessage={setUpdateMessage}
        errors={errors}
        onSubmitHandler={updateHandler}
      />
    </div>
  );
};

export default EditMessage;
