import React from "react";
// import ReactDOM from "react-dom";        // warning giving
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I am an h1 tag!"),
    React.createElement("h1", {}, "I am an h2 tag!"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am an h1 tag!"),
    React.createElement("h1", {}, "I am an h2 tag!"),
  ]),
]);

//! to overcome this react have provided us JSX
console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
