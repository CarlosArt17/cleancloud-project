import React from 'react'
import './Home.css'
import 'leaflet/dist/leaflet.css'
import icaImg from '../components/images/ica.png'

const Home = () => {
    return (
        <div className='home' id ='home'>
            <div className='container-map'>
                <div className='map'>
                </div>
            </div>
            <div className='container-levels'>
                <div className='levels'>
                    <img src={icaImg} alt='icaImg'/>
                </div>
            </div>
        </div>
    )
}

export default Home
