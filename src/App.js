import React from "react"
import Home from "./components/home/Home"
import Contact from "./components/contact/Contact"
import About from "./components/about/About"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"


export default function App() {
    return (
        <Router basename="copy_react_project_1">
            <Routes>
                <Route exact path='/' element={< Home />}></Route>
                <Route exact path='/about' element={< About />}></Route>
                <Route exact path='/contact' element={< Contact />}></Route>
            </Routes>
        </Router>
    )
}