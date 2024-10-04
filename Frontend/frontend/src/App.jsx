import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
// import Home from "/pages/Home.jsx"
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        {/* <div className="pages"> */}
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        {/* </div> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
