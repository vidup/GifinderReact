//Dependencies
const React = require('react');

//Sub-components

//Component
const GetLinkButton = React.createClass({
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
      margin : "5px auto",
      padding : "5px"

    }
    let imgStyle = {
      display : "block",
      margin : "0 auto",
      zIndex : 5,
      width : "85px",
      height : "80px",
      paddingTop : "8px",
      borderRadius : "50%",
      transition: "all 0.3s"
    }

    const imgStyleHover = {
      backgroundColor : "#E64C66"
    }

    imgStyle = !this.state.hover? imgStyle : Object.assign({}, imgStyle, imgStyleHover);
    return (
      <a href={this.props.link} style={ButtonStyle}>
        <div className = "imgWrapper" style={imgStyle}>
          <img
            src="../../../../img/chat.png" alt="download" className="download"
            onMouseEnter={this.onMouseEnter}
            onMouseLeave={this.onMouseLeave}
            style= {{display : "block", margin : "0 auto", width:"64px", height:"64px"}}
            />
        </div>
      </a>
    );
  }
});

module.exports = GetLinkButton;
