import { Link } from "react-router-dom";
import classes from "./Navigation.module.css";

function Navigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}> GDSC</div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/contacts">Contacts</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
