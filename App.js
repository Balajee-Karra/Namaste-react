import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement ==> Object ==> HTML element(render)

// const heading=React.createElement("h1",{id:"heading"},"Namasthe React JS");

// JSX is HTML like [OR] XML - like syntax
// JSX (It's transpiled the code before reaches JS Engine) -- PARCEL - Babel
// JSX ==> React.createElement ==> Object ==> HTML element(render)

const jsxheading=<h1 className="heading" tabIndex="1">Namasthe React using JSX</h1>;

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxheading);
