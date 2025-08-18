    useEffect(() => {
        const firstDress = prefallFirstDress.current;
        if (!firstDress) return;

        // Set initial color if not set
        if (!firstDress.style.backgroundColor) {
            firstDress.style.backgroundColor = "#B8B8B8";
        }

        const handleFirstDress = () => {
            // Compare using rgb format since JS may convert hex to rgb
            const currentColor = firstDress.style.backgroundColor;
            if (currentColor === "rgb(184, 184, 184)" || currentColor === "#B8B8B8") {
                firstDress.style.backgroundColor = "#1f1919ff";
            } else {
                firstDress.style.backgroundColor = "#B8B8B8";
            }
        };
        firstDress.addEventListener('mouseover', handleFirstDress);
        return () => {
            firstDress.removeEventListener('mouseover', handleFirstDress);
        };
    }, []);


    export default function Hero(){
    
        const Hero =  document.querySelector('.Hero');
        const images = ['../Images/Main-page/hero-cover-one.jpeg', '../Images/Main-page/hero-cover-two.jpeg'];
        let index = 0;
        function changeBackground(){
            index = (index + 1) % images.length;
            Hero.style.backgroundImage = `url(${images[index]})`;
        }
        changeBackground();
        setInterval(changeBackground, 5000);
    
        return (
            <div className="Hero">
                <Header />
            </div>
        )
    };