import React from 'react';
import './Navbar.css'

// function useScrollTop() {
//     const [scrollTop, setScrollTop] = useState(0);

//         const handleScroll = () => {
//             setScrollTop(window.scrollY);
//         };

//         useEffect(() => {
//             window.addEventListener('scroll', handleScroll);
//             return () => {
//                 window.removeEventListener('scroll', handleScroll);
//             };
//         }, []);

//         return scrollTop;
//     }

    const Navbar = () => {
        return (
            <div
                className='navbar-container'
            // style={{
            //     borderBottom: scrollTop > 0 ? "1px solid #f5ebe0" : "none",
            // }}
            >
                <div className='navbar' >
                    <h1>Raji</h1>
                    <ul className="nav-menu">
                        <li>
                            <a href="#home">Home</a>
                        </li>
                        <li>
                            <a href="#about">About</a>
                        </li>
                        <li>
                            <a href="#skills">Skills</a>
                        </li>
                        <li>
                            <a href="#experience">Experience</a>
                        </li>
                        <li>
                            <a href="#projects">Projects</a>
                        </li>
                    </ul>
                    <div className="nav-connect">
                        <a href="#connect">Connect</a>
                    </div>
                </div>
            </div>
        )
    }

    export default Navbar;