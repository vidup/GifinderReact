//Dependencies
const React = require('react');
const GifsActions = require('../../../../reflux/Gifs/GifsActions.jsx');

//Sub-components

//Component
const Submit = React.createClass({
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
        type="submit"
        style={InputStyle}
        value="Submit"
      />
    );
  }
});

module.exports = Submit;
