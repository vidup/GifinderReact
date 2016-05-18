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
    this.GIFS_ON_PAGE = 40; // Used in order to chose how many gifs on page you want to display
  },
  setSearchInput : function(inputValue){
    this.inputValue = inputValue;
  },
  showGifs : function(){
    let store = this;
    if(store.inputValue.length>=3){
      // Following request fetches Gifs data from the GIPHY API, based on user input.
      request.get(GIPHY_API_BASE_URI+store.inputValue+GIPHY_API_KEY).end(function(err, res){
        // Saving the response body data in the store
      	store.gifs = res.body.data.slice(0,store.GIFS_ON_PAGE);
        store.trigger("showGifs", store.gifs); // Broadcast of the state to all components listening to the "Gifs" Action.
      });
    }else{
      console.log("Request too small");
      let errorMessage = "Sorry, but you need to type at least 3 characters";
      this.trigger('error', errorMessage);
    }
  },
  hideOverlays : function(activeID){
    this.activeID = activeID;
    this.trigger('hideOverlays', this.activeID); // Send an order to the gifs to hide their overlay
  }
});

module.exports = GifsStore;
