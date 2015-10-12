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

var Project = React.createClass({

  render: function() {
    return (
      <div style={containerStyle}>
        <h2 style={h2Style}><a href="http://drivosaurs.com" target="_blank">Drivosaurs</a></h2>
        <a href="http://drivosaurs.com" target="_blank">
          <img src="http://drivosaurs.com/photos/IMG_0780.jpg" alt="Drivosaurs photo" style={bookCoverStyle} />
        </a>
      </div>
    );
  }
});

module.exports = Project;
