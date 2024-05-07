import { Route, Routes } from "react-router-dom"
import Layout from "./layout/Layout"
import HomePage from "./pages/HomePage"
import Projects from "./pages/Projects"

function App() {

  return (
    <Routes>
      <Route element={<Layout/>}>
        <Route path="/" element={<HomePage/>}/>
      </Route>

      <Route path="projects" element={<Projects/>}/>


    </Routes>
  )
}

export default App