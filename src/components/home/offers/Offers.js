import React from "react"
import {useState , useEffect} from "react"
import Aos from "aos"
import "aos/dist/aos.css"
import "../../../css/offers.css"



export default function Offers() {
    let item1 = {
        image: 'images/logo.png',
        name: 'item1',
        main_price: 1000,
        discount: 25,
        url: ''

    }

    let item2 = {
        image: 'images/logo.png',
        name: "i2",
        main_price: 100,
        discount: 15,
        url: ''
    }
    let item3 = {
        image: 'images/logo.png',
        name: "o3",
        main_price: 200,
        discount: 15,
        url: ''
    }
    let item4 = {
        image: 'images/logo.png',
        name: "o4",
        main_price: 2000,
        discount: 40,
        url: ''
    }

    let item = [item1 , item2 , item3 , item4];
    let n = item.length;

    const [i, setCounter] = useState(0);
    useEffect(() => {
        Aos.init({duration : 2000});
      const interval = setInterval(() => {
        setCounter((prevCounter) => prevCounter + 1);
    }, 3000);
  
      return () => clearInterval(interval);
    }, []);



    

    return (

        <div data-aos="fade-up" className="TopOffers" >
            <div data-aos="fade-down-right"  id="Offers_title" > Our Top Offers  </div>
            <div  className="offers">
                <div data-aos="flip-left" id="offer">
                        <span className="offer_discount">{item[(i)%n].discount}% OFF</span>
                    <center>
                        <img src={item[i%n].image} alt="i1" width="500" height="600" />
                        <span>{item[i%n].name}</span>
                        <span><del>{item[i%n].main_price} $</del></span>
                        <strong>Only on : {item[i%n].main_price * (100 - item[i%n].discount) / 100} $</strong>
                        {/* <span id="Discount">{item[i%n].discount}% OFF</span> */}
                        <button >Track Order</button>
                    </center>
                </div>
                <div data-aos="flip-left" id="offer">
                        <span className="offer_discount">{item[(i+1)%n].discount}% OFF</span>
                    <center>
                        <img src={item[(i+1)%n].image} alt="i2" width="500" height="600" />
                        <span>{item[(i+1)%n].name}</span>
                        <span><del>{item[(i+1)%n].main_price} $</del></span>
                        <strong>Only on : {item[(i+1)%n].main_price * (100 - item[(i+1)%n].discount) / 100} $</strong>
                        <button>Track Order</button>
                    </center>
                </div>
                <div data-aos="flip-right" id="offer">
                        <span className="offer_discount">{item[(i+2)%n].discount}% OFF</span>
                    <center>
                        <img src={item[(i+2)%n].image} alt="i3" width="500" height="600" />
                        <span>{item[(i+2)%n].name}</span>
                        <span><del>{item[(i+2)%n].main_price} $</del></span>
                        <strong>Only on : {item[(i+2)%n].main_price * (100 - item[(i+2)%n].discount ) / 100} $</strong>
                        {/* <span id="Discount">{item[(i+2)%n].discount}% OFF</span> */}
                        <button>Track Order</button>
                    </center>
                </div>
                <div data-aos="flip-right" id="offer">
                        <span className="offer_discount">{item[(i+3)%n].discount}% OFF</span>
                    <center>
                        <img src={item[(i+3)%n].image} alt="i3" width="500" height="600" />
                        <span>{item[(i+3)%n].name}</span>
                        <span><del>{item[(i+3)%n].main_price} $</del></span>
                        <strong>Only on : {item[(i+3)%n].main_price * (100 - item[(i+3)%n].discount ) / 100} $</strong>
                        {/* <span id="Discount">{item[(i+3)%n].discount}% OFF</span> */}
                        <button>Track Order</button>
                    </center>
                </div>
                

            </div>
    </div>
    )

}
