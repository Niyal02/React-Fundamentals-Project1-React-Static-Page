import classes from './main.module.css'

function Main() {
    return (
      <div className={classes.main}>
        <main>
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
    )
  }
  
  export default Main
  