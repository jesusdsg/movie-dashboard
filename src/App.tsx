import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Login from "@pages/Login";
import Dashboard from "@pages/Dashboard";
import { useEffect, useState } from "react";
import { themeStore } from "@stores/theme";

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [menu, setMenu] = useState<boolean>(true);

  useEffect(
    () =>
      themeStore.subscribe((state: any) => {
        setDarkMode(state.darkMode);
        setMenu(state.menu);
      }),
    []
  );
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login darkMode={darkMode} />}></Route>
          <Route
            path="/dashboard"
            element={<Dashboard darkMode={darkMode} menu={menu} />}
          ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
