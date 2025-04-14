import React from 'react';
//import './julien.css';
import Menu from "./pages/Header";
import Home from "./pages/Home";
//import Logo from './pages/laziz logo.png';
import Slow from './pages/slow';
import News from './pages/my image';
import Footer from '../footer';
import { Link } from 'react-router-dom';
//import App from '../App';
import Pizza from './Header';
function Navbar() {
    return (
        <>
            <header class="sticky">
                {/*<img
                    src={Logo}
                    className={{ Logo }}
                    alt=""
                    style={{ width: "100px" }}
                />*/}
                <ul>
                    <li><Link to='/App' style={{ color: "#ffa07a" }}>Home</Link></li>
                    <li><Link to='#'>News</Link></li>
                    <li><Link to='#'>Contackt</Link></li>
                    <li><Link to='#'>Cart</Link></li>
                </ul>
            </header>
            <section className={"welcome-section"}>
                <div className={"overlay"}></div>
                <div className={"welcome-content"}>
                    <h1> Welcome to laziz resturants</h1>
                    <p>
                        Experience culinary delights crafted with passion and served with
                        care.
                    </p>
                    <a href="cart.html" class="menu-button">Explore Our Menu</a>
                </div>
            </section >
            {/*window.addEventListener("scroll", function () {
                var header = document.querySelector("header");
                header.classList.toggle("sticky", window.scrollY > 0);
            });*/}
            <Slow />
            <br />
            <Menu />
            <Pizza />
            <Home />
            <News />
            <Footer />
        </>
    );
}
export default Navbar;