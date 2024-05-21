import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Body1 from "./Components/Body";




const AppLayout = () => {
   return (
    <div className="app">
        <Header/>
        <Body1/>
    </div>
  )
}

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);