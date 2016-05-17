// This is the main entry point for the application

//Dependencies
const React = require('react');
const Reflux = require('reflux');
const ReactDOM = require('react-dom');

//Stores
const GifsStore = require('./reflux/Gifs/GifsStore.jsx');

//Components
let Header = require('./components/Header/Header.jsx');
let Footer = require('./components/Footer/Footer.jsx');
let App = require('./components/App/App.jsx');

//Application Logic
  //Example :
      // ReactDOM.render(<ComponentName/>, document.getElementById('persons'));

ReactDOM.render(
  <div>
    <Header/>
    <App/>
    {/*<Footer/>*/}
  </div>
  ,document.getElementById('application'));
