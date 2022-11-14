import React from 'react';
import './cwmodal.css'
import { CgClose } from 'react-icons/cg';
import { MdArrowForwardIos } from 'react-icons/md';
import { wallets } from '../Objects/Objects';

const Cwmodal = ({ setIsOpen }) => {
  return (
    <>
        <div className="metabnb__overlay" onClick={() => setIsOpen(false)} />
        
        <div className="metabnb__modal">
          <div className="metabnb__modal-connect">
            <h1>Connect Wallet</h1>
            <button onClick={() => setIsOpen(false)}>
              <CgClose id='close'/>
            </button>
           
          </div>
          <p>Choose your preferred wallet:</p>
          <div className="metabnb__modal-wallet">
            {wallets.map(wallet => {
              let { img, text } = wallet;
              return(
                <button>
                  <div className="group">
                    <img src={img} alt="" />
                    <h1>{text}</h1>
                  </div>
                  <MdArrowForwardIos id='arrowForward' />
              </button>
              )
            })}
            
          </div>
        </div>
    </>
  )
}

export default Cwmodal