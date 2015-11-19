var React = require('react');

var bookCoverStyle = {
  maxWidth: '100%',
  maxHeight: '400px'
};

var containerStyle = {
  textAlign: 'center',
  marginBottom: '20px'
};

var h2Style = {
  textAlign: 'center',
  fontFamily: "'Raleway', sans-serif",
  fontWeight: 600,
  fontSize: '22px',
  textTransform: 'uppercase',
  margin: '0 0 20px 0',
  display: 'block',
  color: '#222'
};

var aStyle = {
  display: 'block',
  backgroundColor: '#f03232',
  padding: '10px 0',
  textAlign: 'center',
  textTransform: 'uppercase',
  fontWeight: '500',
  fontSize: '20px',
  color: 'white',
  letterSpacing: '1px',
  textShadow: '1px 1px 0px black'
};

var Headline = React.createClass({
  render: function() {
    return (
      <a href="http://www.amazon.com/React-js-Essentials-Artemij-Fedosejev/dp/1783551623/" style={aStyle} className="headline">Build your first React.js application</a>
    );
  }
});

module.exports = Headline;
