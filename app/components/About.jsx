var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className="page-title text-center">About</h1>
      <p>This app was built following the <a href="https://www.udemy.com/the-complete-react-web-app-developer-course/"> Udemy Course on React</a>.</p>
      <p>You can see the code in <a href="https://github.com/samgrimm/reactweather">github</a></p>
      <p>The following tools were used:</p>
      <ul>
        <li><a href="https://facebook.github.io/react">React</a></li>
        <li><a href="http://openweathermap.org">Open Weather Map</a></li>
        <li><a href="http://foundation.zurb.com/sites/docs/">Foundation</a></li>
      </ul>
    </div>
  );
}

module.exports = About;
