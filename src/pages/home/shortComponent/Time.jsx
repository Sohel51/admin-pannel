import React from 'react'

const Time = () => {
  return (
    <div className='time-box'>
        <div className="date text-center">
            <h3>2023-Jan-Fri</h3>
        </div>
        <div className="main_time d-flex justify-content-center">
            <div className="hour">
                <h2>09</h2>
            </div>
            <div className="colon">
                <h2>:</h2>
            </div>
            <div className="minute">
                <h2>30</h2>
            </div>
            <div className="formate">
                <h5>AM</h5>
            </div>
        </div>
    </div>
  )
}

export default Time