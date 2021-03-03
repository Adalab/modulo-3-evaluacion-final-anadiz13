import React from "react";
import Header from "./Header";
import photo from "../images/photo.jpeg";
import "../stylesheets/App.scss";

function App() {
  return (
    <div>
      <Header />
      Hola mundo
      <img src={photo} />
    </div>
  );
}

export default App;
