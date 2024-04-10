import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import WorkSpace from "./pages/WorkSpace";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/workspace" element={<WorkSpace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
