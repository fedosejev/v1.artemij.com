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
  margin: '20px 0 20px 0',
  display: 'block',
  color: '#222'
};

var Book = React.createClass({

  render: function() {
    return (
      <div style={containerStyle}>
        <a href="http://www.amazon.co.uk/books/dp/1783551623">
          <img src="/images/react_essentials_book_cover.jpg" alt="React.js Essentials book cover" style={bookCoverStyle} />
        </a>
        <h2 style={h2Style}><a href="http://www.amazon.co.uk/books/dp/1783551623">React.js Essentials</a></h2>
      </div>
    );
  }
});

module.exports = Book;
