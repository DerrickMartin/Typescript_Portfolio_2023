import React from 'react';
import './aboutStyle.css';
import AboutHero from '../../components/About/Hero';

const About = () => {
    return (
      <>
        <AboutHero />
        <div className='container'>
          <h1 className='title'>Self Taught, but Inspired by many..</h1>
          <p>Hey, Welcome my friends. This is a short introduction about me.</p>
          <p>I am a self taught Software Engineer, I spent most of my time learning from Youtube, Coursera, SoloLearn, Codecademy, and Linkedin Learning!</p>
          <p>Honestly these apps and websites are great to learn in organized ways for free and minimal pricing. They helped me learn diffrent sections of software, how each language can be awsome and allow me to learn more about whatever section intrigued my mind the most!</p>
          <p>I spent alot of time watching college courses and confrences learning from amazing professors and speakers for React, Nextjs, Tensorflow, and AWS , and Stanford, just to name a few of my favorites</p>
          <br/>
          <p>I know this learning route is not for everyone, but it has been extremely helpful and lifechanging when I had a consistent ever-changing schedule.</p>
          <p>I started coding in highschool in 2012 learning just html and css, and now I can confidently say I know alot more languages now haha.</p>
          <p>I am energetic and always thinking of new projects to tinker with in various coding languages to improve my skills.</p>
          <p>Lastly I would just like to say, Never be afraid to fail a project, its part of the process just keep learning. 😄</p>
        </div>
      </>
    );
  };
  
  export default About;