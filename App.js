/**
 * //how to create this type of listed structure in react
 * <div id ="parent">
 *     <div id="child">
 *      <h1> I am h1 tag </h1>
 *    </div>
 * </div>
 * react element(object) => html (browser understandable)
 * 
 * 
 * <div id ="parent">
 *     <div id="child">
 *      <h1> I am h1 tag </h1>
 *    </div>
 *<div id="child2">
 *      <h1> I am h1 tag </h1>
 *    </div>
 * </div>
 * 
 * 
 * 
 */

// this is how we create nested html structure in react using createElement method


/**const parent = React.createElement("div",{id:"parent"},// React.createElement it is creating an object
    React.createElement("div",{id:"child"},
        [React.createElement("h1",{},"I am h1 tag"),
        React.createElement("h2",{},"I am h2 tag"),
        
        ]// the third argument is children  that are passing 
    )// we can also pass multiple children as an array, list of children
);

//const heading = React.createElement(//this is create basically javascript object
//"h1", 
//    {id :"heading" 
//        ,xyz:"abc"
//    }, "Hello Tanu from React");// this is return object there is no html here

//console.log(heading); // it will show object in console

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));

//root.render(heading); // this render method will convert object into html and show on screen we are passing react element here which is heading
root.render(parent);
*/

//this is how we create nested html structure in react using createElement method




const parent = React.createElement("div",{id:"parent"},// React.createElement it is creating an object
    // create element always takes three arguments first is type of element or name of the tag (h1,div) second is props or (the attributes these are object which attribute which we passed the tags  )  and third is children
    React.createElement("div",{id:"child"},
        [React.createElement("h1",{},"I am h1 tag"),
        React.createElement("h2",{},"I am h2 tag"),
        ]),
    React.createElement("div",{id:"child2"},
        [React.createElement("h1",{},"I am h1 tag"),
        React.createElement("h2",{},"I am h2 tag"),])
        
);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);// what ever we are root.render it is getting replaced in the div which has id root in index.html