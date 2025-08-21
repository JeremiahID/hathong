import { useEffect, useRef } from "react";
import Header from "./header";
import heroCoverOne from '../Images/Main-page/hero-cover-one.jpeg';
import heroCoverTwo from '../Images/Main-page/hero-cover-two.jpg';
import heroCoverThree from '../Images/Main-page/hero-cover-three.jpeg';



export default function Hero() {
    const heroRef = useRef(null);
    const images = [heroCoverOne, heroCoverTwo, heroCoverThree];
    let index = 0;

    useEffect(() => {
        const hero = heroRef.current;
        if (!hero) return;
        hero.style.backgroundImage = `url(${images[index]})`;
        const interval = setInterval(() => {
            index = (index + 1) % images.length;
            hero.style.backgroundImage = `url(${images[index]})`;
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div ref={heroRef} className="Hero">
            <Header />
        </div>
    );
}