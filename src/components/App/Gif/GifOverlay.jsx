//Dependencies
const React = require('react');

//Sub-components

//Component
let GifOverlay = React.createClass({
  getInitialState : function(){
    return { url : ""}
  },
  render : function(){
    let GifOverlayStyle = {
      width : "100%",
      height : "100%",
      position : "absolute",
      top : 0,
      display : "block",
      visibility : this.props.visibility,
      margin : 0,
      backgroundColor : "rgba(0,0,0,0.4)",
      zIndex : 2
    }

    let linkStyle = {
      textDecoration : "none",
      color : "#fff"
    }
    let textStyle = {
      margin : 0,
      textAlign : "center",
      top : 0,
      marginTop : 50

    }
    return (
      <div style={GifOverlayStyle}>
        <a href={this.props.download} style={linkStyle}>
          <h1 style={textStyle}>Direct Link</h1>
        </a>
      </div>
    );
  }
});

module.exports = GifOverlay;
