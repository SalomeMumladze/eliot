import React, { useRef } from 'react';
import ImageSlider from './ImageSlider';
import OurTeam from './OurTeam';
import Contact from './Contact';


const Home = () => {
  const ref = useRef();
  const handleScroll = () => {
    ref.current.scrollIntoView()
    console.log(ref);
  }

  return (
    <div>
      <ImageSlider handleScroll={handleScroll} />
      <OurTeam ref={ref} />
      <Contact />
    </div>
  );
}

export default Home;
