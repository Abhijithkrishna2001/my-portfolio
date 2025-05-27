
import React from "react"
import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import { NotFound } from "./Pages/NotFound"
import { Homes } from "./Pages/Home"
import { Toaster } from "@/Components/ui/toaster"
function App() {
  return (
    <>
     <Toaster/>
      <Router>
        <Routes>
          <Route index element ={<Homes/>} />
          <Route path="*" element ={<NotFound/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
