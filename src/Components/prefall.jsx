import { useEffect, useRef, useState } from 'react';
import prefallFirstCloth from '../Images/Main-page/prefall-first-dress.jpg';
import prefallFirstClothModel from '../Images/Main-page/prefall-first-dress-model.jpg';
import prefallSecondCloth from '../Images/Main-page/prefall-second-dress.jpg';
import prefallSecondClothModel from '../Images/Main-page/prefall-second-dress-model.jpg';
import prefallThirdtCloth from '../Images/Main-page/prefall-third-dress.jpeg';
import prefallThirdClothModel from '../Images/Main-page/prefall-third-dress-model.jpeg';




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

    const [fillFavorite, setfillFavorite] = useState()

    function toggleFavorite(){

    }

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
                            <button className='button-fav' >
                                <svg className='favorite-icon' id="favorite-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                </svg>
                            </button>
                        </div>

                        {/* Second Dress */}
                        <div ref={prefallSecondDress} className="prefall-second-dress col-3 border border-1 ">

                        </div>
                        
                        {/* Third Dress */}
                        <div ref={prefallThirdDress} className="prefall-third-dress col-3 border border-1 ">

                        </div>

                        {/* Text Content */}
                        <div className="prefall-text-content  col-3 ">
                            <div class="text-content row ">
                                <div class="text-content-one col-12 border flex  flex-column align-items-baseline ">
                                    <p class=" px-4 fs-8">"she may be the song that summer sings</p>
                                    <p class=" px-4 fs-8">May be the chill that autumn brings</p>
                                    <p class=" px-4 fs-8">May be a hundred different things...."</p>
                
                                </div>
                                <div class="text-content-two col-12 border flex flex-column">
                                    <div class="text-content-about">
                                        <p class="fs-8 text-center">
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