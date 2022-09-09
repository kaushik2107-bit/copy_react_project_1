import React from "react"
import Home from "./components/home/Home"
import Contact from "./components/contact/Contact"
import About from "./components/about/About"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"


export default function App() {
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route exact path={process.env.PUBLIC_URL} element={< Home />}></Route>
                <Route exact path={process.env.PUBLIC_URL +'/about'} element={< About />}></Route>
                <Route exact path='/contact' element={< Contact />}></Route>
            </Routes>
        </Router>
    )
}