var React = require('react');

var imageStyle = {
  height: '200px'
};

var Photo= React.createClass({

  render: function() {
    return (
      <img src="/images/artemij_fedosejev.jpg" alt="Artemij Fedosejev" style={imageStyle} />
    );
  }
});

module.exports = Photo;
