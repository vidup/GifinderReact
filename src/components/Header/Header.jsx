//Dependencies
const React = require('react');

//Sub-components
let Title = require('./Title.jsx');
let Subtitle = require('./Subtitle.jsx');
const SearchForm = require('./SearchForm.jsx');

//Component
let Header = React.createClass({
  render : function(){
    let headerStyle = {
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
