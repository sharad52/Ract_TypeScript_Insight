const rootElement = document.getElementById('root');

// const element = document.createElement('div');
// element.textContent = 'Hello Universe!';
// element.className = 'container';
// rootElement.appendChild(element);

// const element = React.createElement('div', {
//   className: 'container',
//   children: 'hello Galaxies!!!',
// });

const element = <div className="container">Hello World</div>;

ReactDOM.createRoot(rootElement).render(element);

// To create element
//Signature const var_name = React.createElement("element_name", {
//  className: "class_name",
//  children: "some text value here"
//})
