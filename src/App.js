import { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

// import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light ");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "	#30303c";
      // showAlert(" Dark Mode is Enabled ", "success ");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      // showAlert(" Light Mode is Enabled ", "success ");
    }
  };

  return (
    <>
      {/* <BrowserRouter> */}
      <Navbar mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      {/* <Routes> */}
      {/* <Route
            path="/"
            element={
              <TextForm
                mode={mode}
                toggleMode={toggleMode}
                showAlert={showAlert}
              /> */}

      <TextForm mode={mode} toggleMode={toggleMode} showAlert={showAlert} />
      {/* } */}
      {/* /> */}
      {/* <Route exact path="/about" element={<About mode={mode} />} /> */}
      {/* <Route path="/about" element={<div> This is about page </div>} /> */}
      {/* </Routes>
      </BrowserRouter> */}
    </>
  );
}

export default App;
