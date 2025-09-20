import React from "react";
import ReactDOM from "react-dom/client";

/*//React Element => Object => HTML (DOM) (browser understandable code)


//       REACT ELEMENTS 


const heading = React.createElement("h1",{id :"heading"   }, "Hello Tanu from React");// this is return object there is no html here
const root = ReactDOM.createRoot(document.getElementById("root"));// for displaying on browser we use reactdom 
root.render(heading); // this render method will convert object into html and show on screen we are passing react element here which is heading

this is not a good way to create html structure in react because it is not readable and not maintainable
so we use jsx (javascript xml) it is extension of javascript which looks like html but it is not html it is jsx 

//jsx => react element => object => html (browser understandable code)

  
*/
//Babel is transpilled it to react.createElement => (React element) js object => html element (render)


//       JSX ELEMENTS


/*const jsxHeading = <h1 className="head">Namaste React using JSX</h1>// js engine is not understand this peice of code js engine understand ecmascript so this code is converted into ecmascript by babel

console.log(jsxHeading); // it will show object in console

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);// this is how we use jsx it is more readable and maintainable */

//           REACT COMPONENTS 

//CLASS BASED COMPONENT - OLD WAY OF WRITING COMPONENT  -- USES JAVASCRIPT CLASSES TO cREATE COMPONENT
//FUNCTION BASED COMPONENT - NEW WAY OF WRITING COMPONENT-- USES JAVASCRIPT FUNCTION TO CREATE COMPONENT


// FUNCTION BASED COMPONENT

//const HeadingComponent = () => {
    //return <h1> I am a Functional Component</h1>} // if you dont write  return then we dont need to apply {} we can write in single line like this const HeadingComponent = () => <h1> I am a Functional Component</h1> this is valid too

/*const Title = function() {  //we can also write function like this
    return (
    <h1 className="head" tabIndex="5">
         Namaste React using JSX component

    </h1>)
};*/

/*const Title = ()=>  // but we use arrow function mostly
    (
    <h1 className="head" tabIndex="5">
         Namaste React using JSX component

    </h1>);*/

// this is also valid because we are using () it will understand that we are returning something

const elem =<span> This is span element</span> 


const title =
    (
    <h1 className="head" tabIndex="5">
        {elem}  {/* we can also use react element inside react component using {} */}


         Namaste React using JSX component

    </h1>);

//COMPONENT COMPOSITION -- COMPOSING  two COMPONENTS one inside another component

const number = 1000;
const HeadingComponent = () => (
    <div id ="container">
        <h2>{number}</h2> {/* we can also use javascript variable inside jsx using {}   we can also write this inside the h2 tag */}
        {/* we can also use any valid javascript expression inside jsx using {} */}
        {100+200}
        {title} {/* we can also use react element inside react component using {} */}
        <h3>{console.log("Hi cutie")}</h3> {/* we can also use console.log inside jsx using {} */}
        {/*<Title/> (we can write this thing like this <Title></Title> both are same   ) //this is how we use one component inside another component
*/}    {/*} {Title()}*/} {/* we can also use function call inside jsx using {} */}
        
        <h1 className="heading"> I am a Functional Component</h1>
    </div>
);// this is also valid because we are using () it will understand that we are returning something


const root = ReactDOM.createRoot(document.getElementById("root")); 

root.render(<HeadingComponent/>);// this is how we use component in react we use component as a tag and component name should be in pascal case and it should be self closing tag if there is no children
//babel understand heading component as a function and it will call that function and whatever that function is returning it will convert that into html and show on screen


/**
 * how to create this type of listed structure in react
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




/*const parent = React.createElement("div",{id:"parent"},// React.createElement it is creating an object
    // create element always takes three arguments first is type of element or name of the tag (h1,div) second is props or (the attributes these are object which attribute which we passed the tags  )  and third is children
    React.createElement("div",{id:"child"},
        [React.createElement("h1",{},"This is namaste react"),
        React.createElement("h2",{},"I am Tanuu"),
        ]),
    React.createElement("div",{id:"child2"},
        [React.createElement("h1",{},"I am h1 tag"),
        React.createElement("h2",{},"I am h2 tag"),])
        
);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);// what ever we are root.render it is getting replaced in the div which has id root in index.html*/