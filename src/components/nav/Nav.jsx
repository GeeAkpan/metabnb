import React, { useState, useEffect } from 'react';
import './nav.css';
import { FaHamburger } from 'react-icons/fa'
import MetabnbDark from '../../assets/metabnb-dark.png';
import Cwmodal from '../../components/cwmodal/Cwmodal';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="metabnb__nav">
      < FaHamburger id='hamburger'/>
      <a href="/" id='home'>
        <img src={MetabnbDark} alt="Metabnb Dark Logo" />
      </a>

      <div className="metabnb__nav-links">
        <a href="#discover" className='metabnb__nav-link'>
          <p>Home</p>
        </a>
        <a href="/placetostay" className='metabnb__nav-link'>
          <p>Place to stay</p>
        </a>
        <a href="#NftCollections" className='metabnb__nav-link'>
          <p>NFTs</p>
        </a>
        <a href="#footer" className='metabnb__nav-link'>
          <p>Community</p>
        </a>
      </div>

      <button onClick={() => setIsOpen(true)}>
        Connect Wallet
      </button>
      {isOpen && <Cwmodal setIsOpen={setIsOpen} />}
    </div> 
  )
}

export default Nav