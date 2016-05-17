// This is the main entry point for the application

//Dependencies
const React = require('react');
const Reflux = require('reflux');
const ReactDOM = require('react-dom');

//Stores
const GifsStore = require('./reflux/Gifs/GifsStore.jsx');

//Components
let GifList = require('./components/Gif/GifList.jsx');
let Input = require('./components/Forms/Search/Input.jsx');

//Fake data
const gifs = [
  {
    src : "https://media2.giphy.com/media/ue4rk7zGOW2Qg/giphy.gif"
  },
  {
    src : "https://media0.giphy.com/media/NmWXNMBS9uAhO/giphy.gif"
  },
  {
    src : "https://media0.giphy.com/media/uWmYB9cbZpwdO/giphy.gif"
  },
  {
    src : "https://media3.giphy.com/media/p6DsF6TrStko8/giphy.gif"
  }
];

//Application Logic
  //Example :
      // ReactDOM.render(<ComponentName/>, document.getElementById('persons'));

ReactDOM.render(
  <div>
    <Input type="text" placeholder="Search for Gifs"/>
    <GifList gifs={gifs}></GifList>
  </div>
  , document.getElementById('application'));
