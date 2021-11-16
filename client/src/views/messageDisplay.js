import axios from "axios";
import React, { useState, useEffect } from "react";
import { navigate, Link } from "@reach/router";
import DeleteMessage from "../components/deleteMessage";

const MessageDisplay = (props) => {
  const { messageList, setMessageList } = useState([]);

  const removeFromDom = (id) => {
    const newList = messageList.filter((message) => message._id !== id);
    setMessageList(newList);
  };

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/message")
      .then((res) => {
        console.log(res.data)
        setMessageList(res.data);
      })
      .catch((err) => console.log(err.data));
  }, []);

  return (
    <h1>Display Message Here</h1>
    // <div>
    //   {messageList.map((message, idx) => (
    //     <div className="display" key={idx}>
    //       <p>NAME wrote:</p>
    //       <textarea rows="4" cols="50">
    //         {message.addMessage}
    //       </textarea>
    //       <Link to={"/chatrooms/" + `${message._id}`}>
    //         <button type="button">Edit</button>
    //       </Link>
    //       <DeleteMessage id={message._id} removeFromDom={removeFromDom} />
    //     </div>
    //   ))}
    // </div>
  );
};

export default MessageDisplay;
