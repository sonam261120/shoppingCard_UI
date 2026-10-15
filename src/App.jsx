import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import AddCart from "./Pages/AddCart.jsx";
import Navbar from "./Component/Navbar.jsx"
function App() {
  return (
    <div>
      <div className="bg-slate-900">
            <Navbar />
      </div>
        

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AddCart" element={<AddCart />} />
      </Routes>
    </div>
  )
}
export default App;