import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Contact from '../../Components/Contact/Contact';
import OfferServices from '../../Components/OfferServices/OfferServices';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <OfferServices></OfferServices>
            <Contact></Contact>
        </div>
    );
};

export default Home;