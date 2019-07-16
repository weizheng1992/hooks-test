import React, { useState, useContext, createContext } from "react";
import "./App.css";

const UserContext = new createContext();

const UserProvider = props => {
  let [username, handleChangeUsername] = useState("");
  return (
    <UserContext.Provider value={{ username, handleChangeUsername }}>
      {props.children}
    </UserContext.Provider>
  );
};

const Pannel = () => {
  const { username, handleChangeUsername } = useContext(UserContext);
  return (
    <div>
      <div>user: {username}</div>
      <input onChange={e => handleChangeUsername(e.target.value)} />
    </div>
  );
};

const Form = () => <Pannel />;

const App = () => (
  <UserProvider>
    <Form />
  </UserProvider>
);

export default App;
