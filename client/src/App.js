import { Router } from "@reach/router";
import "./App.css";
import AllChatRooms from "./components/allchatrooms";
import Login from "./components/login";
import Register from "./components/register";
import Java from "./views/java";
import Mern from "./views/mern";
import Python from "./views/python";
import Algos from "./views/algos";
import Help from "./views/help";

function App() {
  return (
    <div>
      <body>
        <Router>
          <Login path="/" />
          <Register path="/register" />
          <AllChatRooms path="/chatrooms" />
          <Java path="/java" />
          <Mern path="/mern" />
          <Python path="/python" />
          <Algos path="/algos" />
          <Help path="help" />
        </Router>
      </body>
    </div>
  );
}

export default App;
