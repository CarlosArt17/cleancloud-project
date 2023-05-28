import React from 'react'
import './Canvas.css'
import canva1 from '../components/images/canva1.jfif'

const Canvas = () => {
    return (
        <div className='canvas' id='canvas'>
            <div className='container'>
                <div className='col-1'>
                    <h2>Información</h2>
                    <img src={canva1} alt='canva1'/>
                </div>
                <div className='col-2'>
                    <iframe width='570' height='320' src='https://youtube.com/embed/FtKg9zJ6oNQ' title='Youtube video player' frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />

                </div>
            </div>
        </div>
    )
}

export default Canvas
