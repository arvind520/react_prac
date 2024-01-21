/*
 Since to make this app production ready we need bundler like webpack, parcel or veet.
 ? The bundler will bundle our project in minified version of it. 

 But for simplicity let's use Parcel as it is lightweight and easy to understand. Parcel uses babel also.
 ! Run command: npm install -D parcel (this command installs parcel for dev dependency so you can start any project).
 npx parcel index.html

  After that just type in terminal/cmd "parcel index.html" and hit enter.
  The browser should open automatically showing our application running.

 */

const parent = React.createElement(
  "div",
  { id: "parent" },
  [
    React.createElement("div", { id: "child1" }, [
        React.createElement("h1", {}, "I am an h1 tag!"),
        React.createElement("h1", {}, "I am an h2 tag!"),
      ]),
      React.createElement("div", { id: "child2" }, [
        React.createElement("h1", {}, "I am an h1 tag!"),
        React.createElement("h1", {}, "I am an h2 tag!"),
      ])
  ]
);

//! to overcome this react have provided us JSX
console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);

// //                                    tag, attribute, innerHTML
// const heading = React.createElement(
//   "h1",
//   { id: "heading", xyz: "abc" },
//   "Hello World from React!"
// );

// // heading is react element which is a javascript object
// console.log(heading)

// //creating root element
// const rootElement = ReactDOM.createRoot(document.getElementById("root"));

// //redering heading inside root element
// rootElement.render(heading); // converting object to html tag
