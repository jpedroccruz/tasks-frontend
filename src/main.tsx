import ReactDOM from "react-dom/client"
import { BrowserRouter, Route, Routes } from "react-router"
import Home from "./Home"
import "./index.css"

const root = document.getElementById("root")

ReactDOM.createRoot(root!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </BrowserRouter>
)