import React from 'react'
import '../style/style.css'
import long from '../img/long.png'

function Long() {
  return (
    <div className="long">
        <div className='potens'>
            <div className='boxes3'>
              <div className='grow'>
                <div>
                    <h1>$1231.34</h1>
                    <p>+3.5%</p>
                </div>
                <p>Potential growth</p>
              </div>

              <div className='minilong'>
                <img src={long}/>
              </div>
               
            </div>
            <div className='boxes3'>
            <div className='grow'>
                <div>
                    <h1>$1231.34</h1>
                    <p>+3.5%</p>
                </div>
                <p>Potential growth</p>
              </div>

              <div className='minilong'>
              <img src={long}/>
              </div>
            </div>
            <div className='boxes3'>
            <div className='grow'>
                <div>
                    <h1>$1231.34</h1>
                    <p>+3.5%</p>
                </div>
                <p>Potential growth</p>
              </div>

              <div className='minilong'>
              <img src={long}/>
              </div>
            </div>
            <div className='boxes3'>
            <div className='grow'>
                <div>
                    <h1>$1231.34</h1>
                    <p>+3.5%</p>
                </div>
                <p>Potential growth</p>
              </div>

              <div className='minilong'>
              <img src={long}/>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Long