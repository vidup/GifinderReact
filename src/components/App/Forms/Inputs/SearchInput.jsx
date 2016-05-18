//Dependencies
const React = require('react');
const GifsActions = require('../../../../reflux/Gifs/GifsActions.jsx');

//Sub-components

//Component
let Input = React.createClass({
  onChange : function(e){
    this.setState({value : e.target.value}, function(){
      GifsActions.setSearchInput(this.state.value);
    });
  },
  render : function(){
    const InputStyle = {
      width : "300px",
      height : "50px",
      lineHeight : "50px",
      margin : "auto",
      display : "block"
    }
    return (
      <input
        type={this.props.type || "text"}
        placeholder={this.props.placeholder || "Type something"}
        onChange = {this.onChange}
        style={InputStyle}
      />
    );
  }
});

module.exports = Input;
