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

var pStyle = {
  display: 'block',
  backgroundColor: '#ff3232',
  padding: '10px 0',
  textAlign: 'center',
  textTransform: 'uppercase',
  fontWeight: '500',
  fontSize: '20px',
  color: 'white',
  letterSpacing: '1px'
};

var Headline = React.createClass({
  render: function() {
    return (
      <a href="http://www.amazon.com/React-js-Essentials-Artemij-Fedosejev/dp/1783551623/" style={pStyle} className="headline">Build your first React application</a>
    );
  }
});

module.exports = Headline;
