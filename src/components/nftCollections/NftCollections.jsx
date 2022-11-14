import React from "react";
import { marketPlaceInfo } from "../Objects/Objects";
import "./nftcollections.css";
import star from "../../assets/star.png";

const NftCollections = () => {
  return (
    <div className="metabnb__nft" id="NftCollections">
      <h1>Inspiration for your next adventure</h1>

      <div className="metabnb__nft-marketplace">
        { marketPlaceInfo.map((info, idx) => {
          let { img, firstline, secondline } = info;

          return (
            <div key={idx} className="metabnb__nft-marketplace-info">
              <img src={img} alt="" />

              <div className="firstLine">
                <span className="left">{firstline.left}</span>
                <span className="right">{firstline.right}</span>
              </div>

              <div className="secondLine">
                <span className="left">{secondline.left}</span>
                <span className="right">{secondline.right}</span>
              </div>

              <div className="star">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NftCollections;
