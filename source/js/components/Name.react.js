var React = require('react');

var style = {
  textAlign: 'center',
  fontFamily: "'Raleway', sans-serif",
  fontWeight: 600,
  fontSize: '30px',
  textTransform: 'uppercase',
  margin: '30px 0 20px',
  display: 'block',
  color: '#222'
};

var Header = React.createClass({

  render: function() {
    return (
      <h1 style={style}>
        Artemij Fedosejev
      </h1>
    );
  }
});

module.exports = Header;
