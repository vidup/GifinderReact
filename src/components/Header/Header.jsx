//Dependencies
const React = require('react');

//Sub-components
var Title = require('./Title.jsx');
var Subtitle = require('./Subtitle.jsx');
const SearchForm = require('./SearchForm.jsx');

//Component
var Header = React.createClass({
  render : function(){
    var headerStyle = {
      width : "100%",
      height : "auto",
      textAlign : "center"
    }
    return (
      <div style={headerStyle} className="header col-12">
        <Title content={this.props.title}/>
        <Subtitle content={this.props.subtitle}/>
        <SearchForm/>
      </div>
    );
  }
});

module.exports = Header;
