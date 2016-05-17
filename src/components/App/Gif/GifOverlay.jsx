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
      position : "relative",
      top : 0,
      display : this.props.display,
      margin : 0,
      backgroundColor : "#F00",
      zIndex : 0
    }

    let textStyle = {
      margin : 0,
      textAlign : "center"
    }
    return (
      <div style={GifOverlayStyle}>
        <h1 style={textStyle}>YOLO</h1>
      </div>
    );
  }
});

module.exports = GifOverlay;
