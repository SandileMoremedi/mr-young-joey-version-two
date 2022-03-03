import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";

function App() {
  return (
    <Routes>
      <Route element={<Home />} />
    </Routes>
  );
}

export default App;
