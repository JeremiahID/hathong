// import HeroCoverOne from '../Images/Main-page/hero-cover-one.jpeg'
import Header from "./header"

export default function Hero(){

    const Hero =  document.querySelector('.Hero');
    const images = ['../Images/Main-page/hero-cover-one.jpeg', '../Images/Main-page/hero-cover-two.jpeg'];
    let index = 0;
    function changeBackground(){
        index = (index + 1) % images.length;
        Hero.style.backgroundImage = `url(${images[index]})`;
        Hero.style.backgroundSize = 'cover';
    }
    changeBackground();
    setInterval(changeBackground, 5000);



    return (
        <div className="Hero" ref={hero}>
            <Header />
        </div>
    )
};