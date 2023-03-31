import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Login from "@pages/Login";
import Dashboard from "@pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
