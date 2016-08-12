// This is the entry to our app and acts as a top level container.  This
//could all bew done just as easily within appClass, but wanted to demonstrate
//ES2015 module imports and I think makes for a nice separation between app stuff
//and F2 implementation details

require('../node_modules/bootstrap/dist/css/bootstrap.css');
var React = require('react');
var ReactDOM = require('react-dom');
import HelloReactApp from './appClass.js';

F2.Apps["com_openf2_examples_react_helloreact"]=HelloReactApp;

ReactDOM.render(<HelloReactApp/>, document.querySelector("#com_openf2_examples_react_helloreact"));
