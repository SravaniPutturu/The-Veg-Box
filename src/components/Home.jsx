import Google from './Google.svg'
import React from 'react';
import facebook from './facebook 1.svg'

const Home = () => {
  return (
    <div>
      <p className='headline'>Find 3D Objects, Mockups <br /> and Ilustration here</p>
      <div className='image' style={{fontSize:'20px',color:'white'}}></div>
      <div className='interfaceContainer'>
        <div className="sky"></div>
        <form className='form'>
          <h2>Create Account</h2>
          <div className='socialLinks'>
            <button><img src={Google} alt="Image" />Sign up with Google</button>
            <button><img src={facebook} alt="" />Sign up with Facebook</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;
