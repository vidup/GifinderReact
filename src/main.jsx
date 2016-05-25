// This is the main entry point for the application

//Dependencies
const React = require('react');
const Reflux = require('reflux');
const ReactDOM = require('react-dom');

//Stores
const GifsStore = require('./reflux/Gifs/GifsStore.jsx');

//Components
var Header = require('./components/Header/Header.jsx');
var Footer = require('./components/Footer/Footer.jsx');
var App = require('./components/App/App.jsx');

//Application Logic
  //Example :
      // ReactDOM.render(<ComponentName/>, document.getElementById('persons'));

ReactDOM.render(
  <div className="row">
    <Header
      title="Gifinder"
      subtitle="Use the search function to find all the Gifs you couldn't even dream of!"
    />
    <App/>
    {/*<Footer/>*/}
  </div>
  ,document.getElementById('application'));
