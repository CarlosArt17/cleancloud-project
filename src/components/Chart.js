import React from 'react'
import taylor from './images/taylor.png'
import './Chart.css'

const Chart = () => {
    return (
        <div className='chart' id='chart'>
            <div className='container'>
                <div className='col-2'>
                    <h2>Canvas</h2>
                    <span className='line'></span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <button className='button'>Explore More</button>
                </div>
                <img src={taylor} alt='taylor' />
            </div>
        </div>
    )
}

export default Chart
