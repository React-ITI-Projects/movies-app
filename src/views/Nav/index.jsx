import { Link, useNavigate } from "react-router-dom";
import styles from "../styles.module.css";

const NavBar = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const handleRegister = () => {
    navigate("/register");
  };

  return (
    <nav className={styles["navWrapper"]}>
      <div className={styles["Logo"]}>WATCH.mov</div>
      <ul className={styles["navTabs"]}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
        <li>
          <Link to="/actors">Actors</Link>
        </li>
        <li>
          <Link to="/tvShows">TV Shows</Link>
        </li>
      </ul>
      <div className={styles["registersContainer"]}>
        <button onClick={handleLogin} className={styles["loginBtn"]}>
          Login
        </button>
        <button onClick={handleRegister} className={styles["registerBtn"]}>
          Register
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
