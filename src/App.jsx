import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";

function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
