//import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

//Create a React component
const App = () => {
  const buttonText = { text: "Click me" };
  const labelText = "Enter Name now:";
  return (
    <div>
      <label htmlFor="name" className="label">
        {labelText}
      </label>
      <input id="name" />
      <button style={{ backgroundColor: "green", color: "white" }}>
        {buttonText.text}
      </button>
    </div>
  );
};

//Take React component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
