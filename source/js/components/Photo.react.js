var React = require('react');

var imageStyle = {
  width: '200px',
  height: '200px',
  borderRadius: '100px',
  marginBottom: '20px'
};

var Photo= React.createClass({

  render: function() {
    return (
      <img src="/images/artemij_fedosejev.jpg" alt="Artemij Fedosejev" style={imageStyle} />
    );
  }
});

module.exports = Photo;