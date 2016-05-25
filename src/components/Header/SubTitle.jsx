//Dependencies
const React = require('react');

//Sub-components

//Component
var Subtitle = React.createClass({
  render : function(){
    return <h2 className="subtitle">{this.props.content}</h2>
  }
});

module.exports = Subtitle;
