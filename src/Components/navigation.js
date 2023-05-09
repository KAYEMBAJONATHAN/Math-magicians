const Navigation = () => (
  <nav className="navigation">
    <h1>Math Magicians</h1>
    <ul className="navbar">
      <li className="nav-item">
        <a href="/">Home</a>
      </li>
      <p>|</p>
      <li className="nav-item">
        <a href="/calculator">Calculator</a>
      </li>
      <p>|</p>
      <li className="nav-item">
        <a href="/quote">Quote</a>
      </li>
    </ul>
  </nav>
);

export default Navigation;
