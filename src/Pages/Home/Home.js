import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Contact from '../../Components/Contact/Contact';
import OfferServices from '../../Components/OfferServices/OfferServices';
import Reviews from '../AllReviews/Reviews/Reviews';
import './Home.css';

const Home = () => {
    return (
        <div id='home'>
            <Banner></Banner>
            <OfferServices></OfferServices>
            <Reviews></Reviews>
            <Contact></Contact>
        </div>
    );
};

export default Home;