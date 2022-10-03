import React, { useEffect, useState } from 'react';
import "./BackToTop.css";

const BackToTop = () => {
    const [backToTopBtn, setBackToTopBtn] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100){
                setBackToTopBtn(true);
            }
            else{
                setBackToTopBtn(false);
            }
        })
    }, []);

    const scrollUp = () => {
        window.scrollTo({
            top:0,
            behavior: "smooth"
        })
    }
    return (
        <div>
            {backToTopBtn && (
                <button title='Top' 
                    className='scroll-top'
                    onClick={scrollUp}
                >^</button>
            )}
        </div>
    );
};

export default BackToTop;