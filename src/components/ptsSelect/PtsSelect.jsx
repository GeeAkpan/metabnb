import React from 'react';
import { IoIosOptions } from 'react-icons/io'
import './ptsselect.css'
import {tabText} from '../Objects/tspObj'

const PtsSelect = () => {
  return (
    <>
        <div className="pts__select-container">
            <div className="tab">
                {tabText.map(text => {
                    return (<button className="tablinks">
                    {text}
                    </button>)
                })
                }
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