import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "@/pages/Home"
import Agents from "@/pages/Agents"
import Brokerages from "@/pages/Brokerages"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agents" element={<Agents />} />
        <Route path="/brokerages" element={<Brokerages />} />
      </Routes>
    </Router>
  )
}

export default App
