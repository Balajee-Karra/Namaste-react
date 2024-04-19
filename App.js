// <!-- // Hello World Program through Java Script

// <script>
//     const heading = document.createElement("h1");
//     heading.innerHTML="Hello World from Java Script!";
//     const root=document.getElementById("root");
//     root.appendChild(heading); 
// </script> -->

// const heading = React.createElement("h1",{id:"heading",xyz:"abc"},"Hello World From React!");
// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

const parent = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "child1" }, [
        React.createElement("h1", { id: "heading1" }, "I am H1 Tag"),
        React.createElement("h2", { id: "heading2" }, "I am H2 Tag")
    ]),
    React.createElement("div", { id: "child2" }, [
        React.createElement("h1", { id: "heading1" }, "I am H1 Tag"),
        React.createElement("h2", { id: "heading2" }, "I am H2 Tag")
    ])
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);