var React = require('react');

var ulStyle = {
  margin: 0,
  padding: 0,
  textAlign: 'center',
  marginBottom: '60px'
};

var liStyle = {
  fontFamily: "'Raleway', sans-serif",
  fontSize: '20px',
  textTransform: 'uppercase',
  margin: '10px 0',
  display: 'block',
  listStyleType: 'none'
};

var titleStyle = {
  fontFamily: "'Raleway', sans-serif",
  fontSize: '20px'
};

var secondAStyle = {
  fontSize: '16px',
  textTransform: 'capitalize',
  marginRight: '5px'
};

var Navigation = React.createClass({

  render: function() {
    return (
      <ul style={ulStyle}>
        <li style={liStyle}><a style={secondAStyle} href="http://linkedin.com/in/artemij" target="_blank">LinkedIn</a> <a style={secondAStyle} href="http://github.com/fedosejev" target="_blank">GitHub</a> <a style={secondAStyle} href="http://twitter.com/artemy" target="_blank">Twitter</a> <a style={secondAStyle} href="http://instagram.com/fedosejev" target="_blank">Instagram</a> <a style={secondAStyle} href="mailto:artemij.com@gmail.com" target="_blank">Email</a></li>
        <li style={liStyle}><a style={secondAStyle} href="http://www.amazon.co.uk/Artemij-Fedosejev/e/B014K7AIDM" target="_blank">Amazon Author</a> <a style={secondAStyle} href="https://www.packtpub.com/books/info/authors/artemij-fedosejev" target="_blank">Packt Publishing Author</a></li>
      </ul>
    );
  }
});

module.exports = Navigation;
