import PropTypes from "prop-types";
import classes from "./navbar.module.css";

function Navbar(props) {
  return (
    <nav className={props.darkMode ? "dark" : ""}>
      <div className={props.darkMode ? classes.navbar : classes.navbar__light}>
        <div style={{ width: "60px", aspectRatio: 1 }}>
          <img
            src="https://imgs.search.brave.com/CQbryDwdAyF7tzJAkmgUm2GiqjquFjxuCYJeDI9GRJI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG40/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvbG9nb3MtMy82/MDAvUmVhY3QuanNf/bG9nby01MTIucG5n"
            alt=""
            className="nav--logo"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <h3 className={classes.nav__logo_text}>React Facts</h3>
        <div className={classes.toggler}>
          {props.darkMode ? (
            <button onClick={props.toggleDarkMode}>Light</button>
          ) : (
            <button onClick={props.toggleDarkMode}>Dark</button>
          )}
        </div>
        <h4 className={classes.nav__title}>React course - Project 1</h4>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  toggleDarkMode: PropTypes.func.isRequired,
};

export default Navbar;
