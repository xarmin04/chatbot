import Home from "./Pages/Home/Home";
import Content from "./Pages/Content/Content";

// import {Route, Routes, useNavigate} from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/content" element={<Content />} />
      </Routes> */}
      <Home />
      <Content />
    </div>
  );
}

export default App;
