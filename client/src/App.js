import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import WorkSpace from "./pages/WorkSpace";
import OutputDisplay from "./components/OutputDisplay";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/workspace" element={<WorkSpace />} />
        <Route path="/output" element={<OutputDisplay />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
