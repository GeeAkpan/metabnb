import React from 'react';
import { IoIosOptions } from 'react-icons/io'
import './ptsselect.css'

const PtsSelect = () => {
  return (
    <>
        <div className="pts__select-container">
            <div className="tab">
                <button className="tablinks">
                    Restaurant
                </button>
                <button className="tablinks">
                    Restaurant
                </button>
                <button className="tablinks">
                    Restaurant
                </button>
                <button className="tablinks">
                    Restaurant
                </button>
                <button className="tablinks">
                    Restaurant
                </button>
                <button className="tablinks">
                    Restaurant
                </button>
                <button className="tablinks">
                    Restaurant
                </button>
            </div>

            <div className="location">
                <p>Location</p>
                <IoIosOptions id="options" />
            </div>
        </div>
    </>
  )
}

export default PtsSelect