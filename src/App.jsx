import { useState } from "react";
import "./App.css";
import Main from "./components/markup/main";
import Navbar from "./components/markup/navbar";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  function toggleDarkMode() {
    setDarkMode((prevMode) => !prevMode);
  }

  return (
    <div className={darkMode ? "dark" : ""}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Main darkMode={darkMode} />
    </div>
  );
}

export default App;
