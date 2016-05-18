//Dependencies
const React = require('react');

//Sub-components
const DownloadButton = require('./DownloadButton.jsx');
const GiphyLinkButton = require('./GiphyLinkButton.jsx');
const GetLinkButton = require('./GetLinkButton.jsx');

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
      zIndex : 2,
      padding : "15px"
    }

    let linkStyle = {
      textDecoration : "none",
      color : "#fff"
    }
    let textStyle = {
      margin : 0,
      textAlign : "center"
    }
    return (
      <div style={GifOverlayStyle}>
        <DownloadButton link={this.props.download} style={{visibility : this.props.visibility}}/>
        <GiphyLinkButton link={this.props.giphy} style={{visibility : this.props.visibility}}/>
        <GetLinkButton link={this.props.origin} style={{visibility : this.props.visibility}}/>
      </div>
    );
  }
});

module.exports = GifOverlay;
