//Dependencies
const React = require('react');

//Sub-components

//Component
let GiphyLinkButton = React.createClass({
  getInitialState : function(){
    return {hover : false}
  },
  onMouseEnter : function(){
    this.setState({hover : true})
  },
  onMouseLeave : function(){
    this.setState({hover : false})
  },
  render : function(){
    const ButtonStyle = {
      display : "block",
      backgroundColor : "transparent",
      textDecoration : "none",
      margin : "5px auto"
    }
    let imgStyle = {
      display : "block",
      margin : "0 auto",
      zIndex : 5,
      width : "105px",
      height : "40px",
      padding : "5px",
      borderRadius : "5px",
      transition: "all 0.3s",
    }

    const imgStyleHover = {
      // backgroundColor : "#000"
    }

    imgStyle = !this.state.hover? imgStyle : Object.assign({}, imgStyle, imgStyleHover);
    return (
      <a href={this.props.link} style={ButtonStyle}>
        <div className = "imgWrapper" style={imgStyle}>
          <img
            src="../../../../img/GiphyTextWhite.png" alt="download" className="download"
            onMouseEnter={this.onMouseEnter}
            onMouseLeave={this.onMouseLeave}
            style= {{display : "block", margin : "0 auto"}}
            />
        </div>
      </a>
    );
  }
});

module.exports = GiphyLinkButton;
