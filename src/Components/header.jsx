import { useEffect, useRef } from 'react';




function Header() {

    // This handle the background color of the header during scrolling
    const headerRef = useRef(null);
    useEffect(() => {
        const handleScroll = () => {
            const scroll = window.scrollY;
            const header = headerRef.current;
            if (!header) return;
            if (scroll >= 50) {
                header.classList.add('background-black');
            } else {
                header.classList.remove('background-black');
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div ref={headerRef} className="header d-flex justify-content-between position-fixed w-100 py-2  ">
            {/* Hambuger icon */}
            <div className="hambuger">
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="hamburger-icon-size">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                    </svg>
                </button>
            </div>

            {/* Logo */}
            <div className="logo">
                <a href="/" target="_self" className=""> HA THONG </a>
            </div>

            {/* Cart */}
            <div className="cart-icon">
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="cart-icon-size">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default Header;