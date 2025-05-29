
import React from "react"
import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import { Homes } from "./Pages/Home"
import { Toaster } from "@/Components/ui/toaster"
function App() {
  return (
    <>
     <Toaster/>
      <Router basename="/my-portfolio" >
        <Routes>
          <Route index element={<Homes />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
