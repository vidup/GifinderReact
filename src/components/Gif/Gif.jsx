//Dependencies
const React = require('react');

//Sub-components

//Component
let Gif = React.createClass({
  getInitialState : function(){
    return { url : ""}
  },
  render : function(){
    let GifStyle = {
      width : "25%",
      display : "block",
      margin : 0,
      float : "left",
      height : "auto" || this.props.height
    }

    return (
      <div>
        <img src={this.props.src} style={GifStyle}></img>
      </div>
    );
  }
});

module.exports = Gif;
