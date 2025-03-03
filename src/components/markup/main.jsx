import PropTypes from "prop-types";
import classes from "./main.module.css";

function Main(props) {
  return (
    <div className={classes.main}>
      <div className={props.darkMode ? classes.main : classes.main__light}>
        <main className={props.darkMode ? "dark" : ""}>
          <h1 className={classes.title}>Fun Facts About React</h1>
          <ul className={classes.facts}>
            <li>Was first released in 2013</li>
            <li>Was created by Jordan Walker</li>
            <li>Has over 100k stars on GitHub</li>
            <li>Maintained by Facebook (Meta)</li>
            <li>Used to create Apps and Websites</li>
          </ul>
        </main>
      </div>
    </div>
  );
}

Main.propTypes = {
  darkMode: PropTypes.bool.isRequired,
};

export default Main;
