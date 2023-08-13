import React, { useState } from "react";
import "./App.css";
import About from "./components/About";
import Nopage from "./components/Nopage";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); // whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const removeBodyClasses = () => {
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-primary')
  }

  const toggleMode = (cls) => {
    removeBodyClasses();
    console.log(cls);
    document.body.classList.add('bg-' + cls)

    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
      // document.title = "TextUtils - Dark Mode";
      // setInterval(() => {
      //   documents.title = "TextUtils is amazing mode";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install TextUtils now";
      // }, 1500); // to change the title of the page in frequent time interval
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      // document.title = "TextUtils - Light Mode";
    }
  };
  return (
    <div className="App">
      {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
      {/* <Navbar/> */}
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} key={new Date()} />
        {/* <Navbar title="TextUtils" mode ={mode} /> */}
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            {/* <Route
              exact
              path="/home"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Try TextUtils - word counter, character counter, remove extra spaces"
                  mode={mode}
                />
              }
            ></Route> */}


            <Route
              exact
              path=""
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Try TextUtils - word counter, character counter, remove extra spaces"
                  mode={mode}
                />
              }
            ></Route>

            
            <Route exact path="/About" element={<About mode={mode} />}></Route>
            <Route exact path="*" element={<Nopage mode={mode} />}></Route>


          </Routes>
        </div>
      </Router>
      {/* <TextForm
              showAlert={showAlert}
              heading="Enter the text to analyze below "
              mode={mode}
            /> */}
    </div>
  );
}

export default App;
