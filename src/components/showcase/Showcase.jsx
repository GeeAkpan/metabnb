import React from 'react';
import './showcase.css';
import MBToken from '../../assets/MBToken.svg';
import MetaMask from "../../assets/Metamask.svg"
import OpenSea from "../../assets/OpenSea.svg"

const Showcase = () => {
  return (
    <div className='metabnb__showcase'>
      <div className='metabnb__showcase-img' >
        <img src={MBToken} alt="" />
      </div>
      <div className='metabnb__showcase-img' >
        <img src={MetaMask} alt="" />
      </div>
      <div className='metabnb__showcase-img' >
        <img src={OpenSea} alt="" />
      </div>
    </div>
  )
}

export default Showcase