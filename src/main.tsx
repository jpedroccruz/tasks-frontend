import ReactDOM from "react-dom/client"
import { BrowserRouter, Route, Routes } from "react-router"
import Home from "./Home"
import TaskDetails from "./pages/TaskDetails"
import "./index.css"

const root = document.getElementById("root")

ReactDOM.createRoot(root!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tasks/:id" element={<TaskDetails />} />
    </Routes>
  </BrowserRouter>
)