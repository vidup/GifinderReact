//Dependencies
const React = require('react');

//Sub-components

//Component
let Header = React.createClass({
  render : function(){
    let headerStyle = {
      width : "100%",
      height : "200px",
      textAlign : "center"
    }
    return (
      <div style={headerStyle}>
        <h1>HEADER</h1>
      </div>
    );
  }
});

module.exports = Header;
