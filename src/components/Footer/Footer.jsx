//Dependencies
const React = require('react');

//Sub-components

//Component
var Footer = React.createClass({
  render : function(){
    var footerStyle = {
      width : "100%",
      height : "200px",
      textAlign : "center"
    }
    return (
      <div style={footerStyle}>
        <h1>FOOTER</h1>
      </div>
    );
  }
});

module.exports = Footer;
