import React from 'react'
import  '../style/style.css'
import Sart from '../img/start.png'


function Mainbanner() {
  return (
    <div className='banner'>
            <div className='freebanner'>
                <div className='start'>
                    <img src={Sart}/>
                </div>

                <div className='days'>
                <h1>Start 30 days free trails!</h1>
                    <p>By downloading the onstallers,you agree to agreee to accept the term of service and privacy policy.</p>  
                </div>

                <div className='trailbtn'>
                    <button>Trail Download</button>
                </div>
            </div>
    </div>
  )
}

export default Mainbanner