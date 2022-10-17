import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Contact from '../../Components/Contact/Contact';
import OfferServices from '../../Components/OfferServices/OfferServices';
import OurPartners from '../../Components/OurPartners/OurPartners';
import PageTitle from '../../Components/Shared/PageTitle/PageTitle';
import Reviews from '../AllReviews/Reviews/Reviews';
import './Home.css';

const Home = () => {
    return (
        <div id='home'>
            <PageTitle title="Home"></PageTitle>
            <Banner></Banner>
            <OfferServices></OfferServices>
            <OurPartners></OurPartners>
            <Reviews></Reviews>
            <Contact></Contact>
        </div>
    );
};

export default Home;