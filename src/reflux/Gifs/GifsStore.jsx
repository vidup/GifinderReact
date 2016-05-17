//Dependencies
const Reflux = require('reflux');
const GifsActions = require('./GifsActions.jsx');
const request = require('superagent');

//Base URI for Giphy API & api_key
const GIPHY_API_BASE_URI = 'https://api.giphy.com/v1/gifs/search?q=';
const GIPHY_API_KEY = '&limit=80&api_key=dc6zaTOxFJmzC';

let GifsStore = Reflux.createStore({
  listenables : [GifsActions],
  init : function(){
    this.GIFS_ON_PAGE = 20; // Used in order to chose how many gifs on page you want to display
  },
  getGifs : function(inputValue){
    let store = this;

    // Following request fetches Gifs data from the GIPHY API, based on user input.
    if(inputValue.length>=3){
      request.get(GIPHY_API_BASE_URI+inputValue+GIPHY_API_KEY).end(function(err, res){
        // Saving the response body data in the store
      	store.gifs = res.body.data.slice(0,store.GIFS_ON_PAGE);
        this.loaded = false; //This will be modified by the GifsList Component, when Gifs are loaded
      });
    }else{
      console.log("Request too small");
    }
  },
  showGifs : function(){
    this.trigger("showGifs", this.gifs); // Broadcast of the state to all components listening to the "Gifs" Action.
  }
});

module.exports = GifsStore;
