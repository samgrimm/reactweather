var React = require('react');
var {Link} = require('react-router');
var Examples = (props) => {
  return (
    <div>
      <h1 className="page-title text-center">Examples</h1>
      <p>Here are a few example locations to try out:</p>
      <ol>
        <li>
          <Link to='/?location=Austin'>Austin, TX</Link>
        </li>
        <li>
          <Link to='/?location=Floripa'>Florianopolis, Brazil</Link>
        </li>
      </ol>
    </div>
  );
}


module.exports = Examples;
