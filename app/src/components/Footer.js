import React from 'react'
import '../style/style.css'
import foot from '../img/foot.png'

function Footer() {
  return (
    <div className='footer'>
        <div className="foots">
            <div>
                <p>Copyright © 2019 UrbanUI. All rights reserved.</p>
            </div>

            <div>
                <p><a target='_blank' href="https://xn--80affa3aj0al.xn--80asehdb/@MBNN_S">Created by Muhammad</a></p>
                <img src={foot}/>
            </div>
        </div>
    </div>
  )
}

export default Footer