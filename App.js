import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement ==> Object ==> HTML element(render)

// const heading=React.createElement("h1",{id:"heading"},"Namasthe React JS");

// JSX is HTML like [OR] XML - like syntax
// JSX (It's transpiled the code before reaches JS Engine) -- PARCEL - Babel
// JSX ==> React.createElement ==> Object ==> HTML element(render)

// const root=ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

// React Component
// Class Based Component - Old
// Functional Based Component - New

// React Functional Component

// Component Composition --> using 2 components in a single place.

const elem=<span>React Element </span> 

const Title = () => (<h1 className="heading" tabIndex="1">
    {elem}
    Namasthe React using JSX
    </h1>
);

const title = (<h1 className="heading">Hello Balajee K</h1>);

const num=1000;
const HeadingComponent = () => (
 <div id="container">
    <Title/>
    {Title()}
    {title}
    <h1 className="heading"> Namasthe React Functional Component </h1>
 </div>
);

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);