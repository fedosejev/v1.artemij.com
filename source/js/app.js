var React = require('react');
window.React = React; // export for http://fb.me/react-devtools

var Application = React.createClass({
	render: function() {
		return (
			<header>
				<div>
					<a href="http://github.com/fedosejev"><i className="fa fa-github"></i></a>
					<a href="http://linkedin.com/in/artemij"><i className="fa fa-linkedin-square"></i></a>
					<a href="http://medium.com/@artemij"><i className="fa fa-book"></i></a>
					<a href="mailto:artemij.com@gmail.com"><i className="fa fa-envelope-o"></i></a>
				</div>
				<h1>Artemij Fedosejev</h1>
				<h2>
					Front End Developer &amp; Entrepreneur
				</h2>
			</header>
		);
	}
});

React.render(
	<Application />,
	document.querySelectorAll('[data-application-container]')[0]
);