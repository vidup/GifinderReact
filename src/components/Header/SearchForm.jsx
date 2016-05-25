//Dependencies
const React = require('react');
const GifsActions = require('../../reflux/Gifs/GifsActions.jsx');

//Sub-components
var Submit = require('../App/Forms/Buttons/Submit.jsx');
var SearchInput = require('../App/Forms/Inputs/SearchInput.jsx');

//Component
var SearchForm = React.createClass({
  onSubmit : function(e){
    e.preventDefault();
    this.setState({value : e.target.value}, function(){
      GifsActions.showGifs();
    });
  },
  render : function(){
    return (
      <form onSubmit={this.onSubmit}>
        <SearchInput type="text" placeholder="Search for Gifs"/>
        <Submit/>
      </form>
    );
  }
});

module.exports = SearchForm;
