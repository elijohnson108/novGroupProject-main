import React from "react";

const MessageForm = (props) => {
  const { onSubmitHandler, message, setMessage, errors } = props;

  const onInputHandler = (e) => {
    let newStateObject = { ...message };
    newStateObject[e.target.name] = e.target.value;
    console.log(e.target.name, e.target.value);
    setMessage(newStateObject);
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <label>New Message</label>
      <br />
      <input
        type="text"
        onChange={onInputHandler}
        name="addMessage"
        value={message.addMessage}
        style={{ width: "500px", height: "75px" }}
      />
      {errors && errors.addMessage && <p>{errors.addMessage.message}</p>}
      <button type="submit">Submit Message</button>
    </form>
  );
};

export default MessageForm;
