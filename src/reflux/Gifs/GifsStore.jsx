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
    this.loaded = true;
    this.GIFS_ON_PAGE = 12; // Used in order to chose how many gifs on page you want to display
  },
  getGifs : function(inputValue){
    let store = this;
    // Gifs data fetched from the GIPHY API, base on user input.
    if(this.loaded && inputValue.length>=3){
      request.get(GIPHY_API_BASE_URI+inputValue+GIPHY_API_KEY).end(function(err, res){
        // Save the response body data in the store, for the first 50
      	store.gifs = res.body.data.slice(0,store.GIFS_ON_PAGE);
        this.loaded = false; //This will be modified by the GifsList Component, when Gifs are loaded
        store.trigger("Gifs", store.gifs); // Broadcast of the state to all components listening to the "Gifs" Action.
      });
    }else{
      console.log("Gifs not loaded yet");
    }
  },
  gifsLoaded : function(){
    this.loaded = true;
  }
});

module.exports = GifsStore;
