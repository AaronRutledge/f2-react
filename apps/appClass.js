import React from 'react';

//Believe it or not, this is an F2 App_Class.  We extend it from React.Component
//so we can render a react component to the DOM
class HelloReactApp extends React.Component {
  constructor(appConfig, appContent, root) {
    super();
    this.appConfig = appConfig;
    this.appContent = appContent;
    this.$root = $(root);
  }
  init() {
      console.log("F2 App init called");
  }
  render() {
    return (
      <div>
        <h1>Hello F2 React!</h1>
        <p>This is a React component rendered via F2.</p>
        <p>In this example we extend our F2 App_Class with React.Component.</p>
      </div>
    );
  }
}

export {HelloReactApp as default}
