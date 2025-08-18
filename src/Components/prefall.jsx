import { useEffect, useRef } from 'react';


export default function Prefall(){

    const prefallFirstDress = useRef(null);

    useEffect(() => {
        const handleDressChange = () => {
            // const header = headerRef.current;
            console.log("Test")
        };
        window.addEventListener('onMouseOver', handleScroll);
        return () => {
            window.removeEventListener('onMouseOver', handleScroll);
        };
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
                        <div ref={prefallFirstDress} className="prefall-first-dress bg-secondary col-3 ">

                        </div>

                        {/* Second Dress */}
                        <div className="prefall-second-dress bg-dark col-3 ">

                        </div>
                        
                        {/* Third Dress */}
                        <div className="prefall-third-dress bg-success col-3 ">

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