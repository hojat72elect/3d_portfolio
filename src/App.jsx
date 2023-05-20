import {BrowserRouter} from "react-router-dom";

import {About, Contact, Experience, Feedbacks, Tech, Works, StarsCanvas} from "./components";
import Hero from "./hero/Hero.jsx";
import Navbar from "./navbar/Navbar.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <div className='relative z-0 bg-primary'>
                <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
                    <Navbar/>
                    <Hero/>
                </div>
                <About/>
                <Experience/>
                <Tech/>
                <Works/>
                <Feedbacks/>
                <div className='relative z-0'>
                    <Contact/>
                    <StarsCanvas/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
