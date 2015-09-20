var React = require('react');

var bookCoverStyle = {
  maxWidth: '100%',
  maxHeight: '400px'
};

var containerStyle = {
  textAlign: 'center',
  marginTop: '60px',
  marginBottom: '60px'
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

var Artosaurs = React.createClass({

  render: function() {
    return (
      <div style={containerStyle}>
        <h2 style={h2Style}>Photographer at <a href="http://artosaurs.com" target="_blank">Artosaurs</a></h2>
        <a href="http://artosaurs.com" target="_blank">
          <img src="http://artosaurs.com/photos/IMG_1056.jpg" alt="Artosaurs photo" style={bookCoverStyle} />
        </a>
      </div>
    );
  }
});

module.exports = Artosaurs;
