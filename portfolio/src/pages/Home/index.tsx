import React from 'react';

import {ContactUs} from '../../components/email';

//HeroSection
import Hero from '../../components/Home/Hero';

const Home = () => {

  
    return (
      <div>
        <Hero />
        <h1>Home Page</h1>
        <p>Welcome to my website!</p>
        <div>
        <ContactUs />
        </div>
      </div>
    );
  };
  
  export default Home;