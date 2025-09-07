import { useEffect, useRef, useState, useCallback } from 'react';
import prefallFirstCloth from '../Images/Main-page/prefall-first-dress.jpg';
import prefallFirstClothModel from '../Images/Main-page/prefall-first-dress-model.jpg';
import prefallSecondCloth from '../Images/Main-page/prefall-second-dress.jpg';
import prefallSecondClothModel from '../Images/Main-page/prefall-second-dress-model.jpg';
import prefallThirdtCloth from '../Images/Main-page/prefall-third-dress.jpeg';
import prefallThirdClothModel from '../Images/Main-page/prefall-third-dress-model.jpeg';
import favorite from '../Utilities/favorite.svg';
import fillFavorite from '../Utilities/fillfavorite.svg'




export default function Prefall(){

    const prefallFirstDress = useRef(null);

    useEffect(() => {
        const firstDress = prefallFirstDress.current;
        if (!firstDress) return;

        // Set initial image if not set
        if (!firstDress.style.backgroundImage) {
            firstDress.style.backgroundImage = `url(${prefallFirstCloth})`;
        }

        const handleFirstDress = () => {
            firstDress.style.backgroundImage = `url(${prefallFirstClothModel})`;
        };

        const handleMouseOut = () => {
            firstDress.style.backgroundImage = `url(${prefallFirstCloth})`;
        };

        firstDress.addEventListener('mouseover', handleFirstDress);
        firstDress.addEventListener('mouseout', handleMouseOut);

        // done to prevent unwanted behavior incase this component is removed from the page.
        return () => {
            firstDress.removeEventListener('mouseover', handleFirstDress);
            firstDress.removeEventListener('mouseout', handleMouseOut);
        };
    }, []);


    const prefallSecondDress = useRef(null);

    useEffect(() => {
        const secondDress = prefallSecondDress.current;
        if (!secondDress) return;

        // Set initial image if not set
        if (!secondDress.style.backgroundImage) {
            secondDress.style.backgroundImage = `url(${prefallSecondCloth})`;
        }

        const handleFirstDress = () => {
            secondDress.style.backgroundImage = `url(${prefallSecondClothModel})`;
        };

        const handleMouseOut = () => {
            secondDress.style.backgroundImage = `url(${prefallSecondCloth})`;
        };

        secondDress.addEventListener('mouseover', handleFirstDress);
        secondDress.addEventListener('mouseout', handleMouseOut);

        // done to prevent unwanted behavior incase this component is removed from the page.
        return () => {
            secondDress.removeEventListener('mouseover', handleFirstDress);
            secondDress.removeEventListener('mouseout', handleMouseOut);
        };
    }, []);

    const prefallThirdDress = useRef(null);

    useEffect(() => {
        const thirdDress = prefallThirdDress.current;
        if (!thirdDress) return;

        // Set initial image if not set
        if (!thirdDress.style.backgroundImage) {
            thirdDress.style.backgroundImage = `url(${prefallThirdtCloth})`;
        }

        const handleFirstDress = () => {
            thirdDress.style.backgroundImage = `url(${prefallThirdClothModel})`;
        };

        const handleMouseOut = () => {
            thirdDress.style.backgroundImage = `url(${prefallThirdtCloth})`;
        };

        thirdDress.addEventListener('mouseover', handleFirstDress);
        thirdDress.addEventListener('mouseout', handleMouseOut);

        // done to prevent unwanted behavior incase this component is removed from the page.
        return () => {
            thirdDress.removeEventListener('mouseover', handleFirstDress);
            thirdDress.removeEventListener('mouseout', handleMouseOut);
        };
    }, []);


    const [favoriteIcons, setFavoriteIcons] = useState([false, false, false]);

    const toggleFavorite = useCallback((idx) => {
        setFavoriteIcons(prev => prev.map((fav, i) => i === idx ? !fav : fav));
    }, []);

    return (
        <div className="prefall  ">
            {/* Prefall Header Jsx */}
            <div className="prefall-header m-2 d-flex  ">
                <div className="first-section d-flex justify-content-center align-items-center">
                    <p className="fs-4">Fall</p>
                </div>
 
                <div className="second-section d-flex justify-content-between align-items-center p-2">
                    <p className="fs-4 text-black text-uppercase">
                        pre fall 2024 
                    </p>

                    <hr className=" prefall-line w-50 " />

                    <button className="prefall-header-button p-2">
                        Explore
                    </button>
                </div>

                <div className="Third-section d-flex justify-content-center align-items-center">
                    <p className="fs-4">2024</p>
                </div>
            </div>

            {/* Prefall Header Jsx */}
            <div className="prefall-dress-wrapper row m-2 flex">
                <div className="prefall-dress col-12 ">
                    <div className="prefall-dress row">
                        {/* First Dress */}
                        <div  ref={prefallFirstDress}  className="prefall-first-dress col-3 border border-1 ">
                            <button className='button-fav' onClick={() => toggleFavorite(0)} >
                                <img 
                                 src={favoriteIcons[0] ? fillFavorite : favorite}
                                 alt="favorite icon" 
                                 className='favorite-icon' />
                            </button>
                        </div>

                        {/* Second Dress */}
                        <div ref={prefallSecondDress} className="prefall-second-dress col-3 border border-1 ">
                            <button className='button-fav' onClick={() => toggleFavorite(1)} >
                                <img 
                                 src={favoriteIcons[1] ? fillFavorite : favorite}
                                 alt="favorite icon" 
                                 className='favorite-icon' />
                            </button>
                        </div>
                        
                        {/* Third Dress */}
                        <div ref={prefallThirdDress} className="prefall-third-dress col-3 border border-1 ">
                            <button className='button-fav' onClick={() => toggleFavorite(2)} >
                                <img 
                                 src={favoriteIcons[2] ? fillFavorite : favorite}
                                 alt="favorite icon" 
                                 className='favorite-icon' />
                            </button>
                        </div>

                        {/* Text Content */}
                        <div className="prefall-text-content  col-3 ">
                            <div className="text-content row ">
                                <div className="text-content-one col-12 border flex  flex-column align-items-baseline ">
                                    <p className=" px-4 fs-8">"she may be the song that summer sings</p>
                                    <p className=" px-4 fs-8">May be the chill that autumn brings</p>
                                    <p className=" px-4 fs-8">May be a hundred different things...."</p>
                
                                </div>
                                <div className="text-content-two col-12 border flex flex-column">
                                    <div className="text-content-about">
                                        <p className="fs-8 text-center">
                                            "Ha Thong" officially launched in 
                                            December 2019 is a fashion brand
                                            founded by the designer of the same 
                                            name.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}