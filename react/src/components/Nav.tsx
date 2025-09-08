export default function NavBar() {
  return (
    <nav className="topnav" aria-label="Primary">
      <div className="brand">
        <img
          src="/img/logo.svg.png"
          alt="Pixell River Financial logo"
          width={36}
          height={36}
        />
        <span className="brand-name">Pixell River Financial</span>
      </div>

      <ul className="nav-links">
        <li>
          <a href="#" aria-current="page">Employees</a>
        </li>
        <li>
          <a href="#">Organization</a>
        </li>
      </ul>
    </nav>
  );
}
