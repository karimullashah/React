import React from "react";
import ReactDOM from "react-dom/client";



const a = [1,2,3,4,5,6];
a.length = 2;

console.log(a);

// React Element => ReactElement - Js Object => HTMLElement (render this to dom)
const heading = React.createElement(
  "h1",
  { id: "heading2" },
  "Assalamualikum React ❤"
);

// JSX - HTML like syntax or XML, not HTML inside JS or XML in JS.
// React Element using JSX
// JSX (transpiled before it reaches the JS) - PARCEL -> Babel
// JSX => babel transpiles it to => React.CreateElement => JS Object => HTMLElement(render)
// if we are writting in multiple line then wrap with closed braces

const jsxHeading = <h1 id="heading">Salam React using JSX 🚀</h1>;
console.log(jsxHeading);

const fn = () => true;

const fn2 = () => {
  return true;
};
// fn and fn2 are both same but written different ways.

// React Functional Component

const Title = () => <h1 className="head" id="rJSX">Namaste React using JSX</h1>;

const title2 = (
  <h1 className="head2" tabIndex="5">
    Namaste React using JSX 2
  </h1>
);



// Component Composition => Component inside Component.
const HeadingComponent = () => {
  return (
    <div>
      {heading}
      {title2}
      <Title />
      <h1 className="heading2">Salam React Functional Component</h1>
    </div>
  );
};

const HeadingComponent2 = () => (
  <div>
    {heading}
    {title2}
    <Title />
    <h1 className="heading2">Salam React Functional Component</h1>
  </div>
);
// HeadingComponent and HeadingComponent2 are both same written in differen ways.

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);

// root.render(title2); is also possible