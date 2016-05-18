//Dependencies
const React = require('react');

//Sub-components

//Component
let Title = React.createClass({
  render : function(){
    return <h1 className="title">{this.props.content}</h1>
  }
});

module.exports = Title;
