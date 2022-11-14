import React from 'react';
import './header.css';
import metabnbImg from '../../assets/header-img.png'

const Header = () => {
  return (
    <div className='metabnb__header' id='header'>
      <div className='metabnb__header-info'>
        <h1>Rent a <span className='infocolor'>Place</span> away from <span className='infocolor'>Home</span> in the <span className="infocolor">Metaverse</span></h1>
        <p>we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</p>
        <div className='form'>
          <input type="text" placeholder='Search for location' name='search'/>
          <button type='Submit'>Search</button>
        </div>


      </div>
      <div className='metabnb__header-img'>
        <img src={metabnbImg} alt="Stacked Img" />
      </div> 

    </div>
  )
}

export default Header;