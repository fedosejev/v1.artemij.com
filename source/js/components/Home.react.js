var React = require('react');

var Name = require('./Name.react');
var Photo = require('./Photo.react');
var Navigation = require('./Navigation.react');
var Book = require('./Book.react');

var containerStyle = {
  height: '100%',
  paddingTop: '5%',
  paddingBottom: '10px',
  textAlign: 'center'
};

var Home = React.createClass({
  render: function () {
    return (
      <div className="container" style={containerStyle}>
        <div className="row">
          <div className="col-sm-6 col-md-5 col-md-offset-1">

            <Photo />
            <Name />
            <Navigation />

          </div>
          <div className="col-sm-6 col-md-5">

            <Book />

          </div>
        </div>
      </div>
    );
  }
});

module.exports = Home;
