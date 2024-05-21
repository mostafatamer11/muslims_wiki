import React from 'react';
import MainBackground from '/hero-banner.png';
import Overlay from '../components/Overlay';
import Button from '../components/Button';

const Home = () => {
  return (
    <div>
      <main style={{
        backgroundImage: `url(${MainBackground})`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        minHeight: '100vh'
      }} className="hero-section">
        <Overlay className={"flex flex-col justify-center items-center"}>
          <h1 className='text-4xl font-bold tracking-[-5px] text-yellow-100'>أهلا بكم في مسلم ويكي</h1>
          <p className='font-bold text-[28px] tracking-[-11%] mt-4'>أفضل مدونة في الوطن العربي</p>
          <Button className={"mt-8"} color={"green"}>ابدأ الآن</Button>
        </Overlay>
      </main>
    </div>
  )
}

export default Home