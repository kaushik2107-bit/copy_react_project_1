import React, { useEffect } from "react"
import Homepic from "./Homepic"
import Navbar from "./Navbar"
import {useTransition, animated} from "react-spring"
import Contact from "./Contact"
import Footer from "./Footer"

export default function App() {
    const [scrollY, setScrollY] = React.useState(window.scrollY);

    const scroll = () => {
        setScrollY((prevState) => prevState = window.scrollY);
    }

    useEffect(() => {
        window.addEventListener('scroll', scroll)
    }, [])

    const transition = useTransition(scrollY > window.innerHeight, {
        from: {x: 0, y: -80, opacity: 0},
        enter: {x: 0, y: 0, opacity: 1},
        leave: {x: 0, y: -80, opacity: 0},
    })

    return (
        <div className="app">
            {transition((style, item) => 
                item ? <animated.div className="navbar" style={style}>
                            <Navbar />
                        </animated.div>
                     : " "
            )}
            <Homepic />            
            <div className="hello">
            
            </div>
          <Contact />
          <Footer />
        </div>
    )
}