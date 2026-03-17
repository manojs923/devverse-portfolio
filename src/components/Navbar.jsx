import { NavLink } from "react-router-dom";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Projects", to: "/projects" },
  { label: "Contact", to: "/contact" },
];

function Navbar() {
  return (
    <nav className="site-nav">
      <NavLink to="/" className="brand-mark">
        <span className="brand-dot" />
        <div>
          <strong>DevVerse</strong>
          <p>Manoj Portfolio</p>
        </div>
      </NavLink>

      <div className="nav-links">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              isActive ? "nav-link nav-link-active" : "nav-link"
            }
          >
            {item.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
