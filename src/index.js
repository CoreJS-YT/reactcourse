import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Saludar() {
  var user = {
    firstName: "ryan",
    lastname: "Ray",
  };

  return (
    <>
      <h1>{user.firstName}</h1>
      <h3>{user.lastname}</h3>
    </>
  );
}

root.render(<Saludar />);
