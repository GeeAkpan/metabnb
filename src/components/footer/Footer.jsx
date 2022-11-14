import React from 'react';
import {FiFacebook, FiInstagram, FiTwitter} from 'react-icons/fi'
import { FaRegCopyright } from 'react-icons/fa'
import './footer.css';
import { section } from '../Objects/Objects'
import MetabnbDark from '../../assets/metabnb-light.svg';

const Footer = () => {
  return (
    <div className='metabnb__footer' id='footer'>
      <div className="metabnb__footer-wrap">
        <div className="metabnb__footer-icon">
          <img src={MetabnbDark} alt="" />

          <div className="icons">
            <a href="#">
              <FiFacebook className='icon' />
            </a>
            <a href="#">
              <FiInstagram className='icon' />
            </a>
            <a href="#">
              <FiTwitter className='icon' />
            </a>
          </div>
        </div>

        <div className="metabnb__footer-section">
          { section.map(( (section, idx) => {
              let { header, list1, list2, list3, list4 } = section;
              
              return (
                  <div key={idx} className="section">
                    <a href="#">
                      <p className="lg">{header}</p>
                    </a>
                    <a href="#">
                      <p>{list1}</p>
                    </a>
                    <a href="#">
                      <p>{list2}</p>
                    </a>
                    <a href="#">
                      <p>{list3}</p>
                    </a>
                    <a href="#">
                      <p>{list4}</p>
                    </a>
                  </div>
              )
            }))
          }
          
        </div>
      </div>

      <div className="metabnb__footer-copy">
          <p>
            <FaRegCopyright id='copy'/> 2022 Metabnb
          </p>
      </div>
    </div>
  )
}

export default Footer