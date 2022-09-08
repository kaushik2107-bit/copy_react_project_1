import React from "react"
import Home from "./Home"
import Contact from "./Contact"
import About from "./About"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"


export default function App() {
    return (
        <Router>
            <Routes>
                <Route exact path='/' element={< Home />}></Route>
                <Route exact path='/about' element={< About />}></Route>
                <Route exact path='/contact' element={< Contact />}></Route>
            </Routes>
        </Router>
    )
}