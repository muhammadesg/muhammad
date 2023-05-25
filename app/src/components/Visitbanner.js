import React from 'react'
import '../style/style.css'
import usa from '../img/usa.png'
import aus from '../img/aus.png'
import uni from '../img/uni.png'
import ger from '../img/ger.png'
import bras from '../img/bras.png'
import rom from '../img/rom.png'
import {ReactComponent as World} from '../img/world.svg'

function Visitbanner() {
  return (
    <div className='visitbanner'>
        <div className='vis_banner'>
            <p>Visitors by Countries</p>
            <div className="vsbanners">
                <div className="vsleft">
                    <div className='boxes9'>
                        <div className='vscountry'>
                            <img src={usa}/>
                            <p>USA</p>
                        </div>

                        <div className='vsproten'>
                            <p>1500</p>
                            <p>56.35%</p>
                        </div>
                    </div>

                    <div className='boxes9'>
                        <div className='vscountry'>
                            <img src={aus}/>
                            <p>Australia</p>
                        </div>

                        <div className='vsproten'>
                            <p>760</p>
                            <p>15.45%</p>
                        </div>
                    </div>

                    <div className='boxes9'>
                        <div className='vscountry'>
                            <img src={uni}/>
                            <p>United Kingdom</p>
                        </div>

                        <div className='vsproten'>
                            <p>450</p>
                            <p>25.00%</p>
                        </div>
                    </div>

                    <div className='boxes9'>
                        <div className='vscountry'>
                            <img src={ger}/>    
                            <p>Germany</p>
                        </div>

                        <div className='vsproten'>
                            <p>800</p>
                            <p>33.25%</p>
                        </div>
                    </div>

                    <div className='boxes9'>
                        <div className='vscountry'>
                            <img src={bras}/>    
                            <p>Brasil</p>
                        </div>

                        <div className='vsproten'>
                            <p>230</p>
                            <p>75.00%</p>
                        </div>
                    </div>

                    <div className='boxes9'>
                        <div className='vscountry'>
                            <img src={rom}/>
                            <p>Romania</p>
                        </div>

                        <div className='vsproten'>
                            <p>620</p>
                            <p>10.25%</p>
                        </div>
                    </div>

                </div>

                <div className='vsright'>
                    <World className='world'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Visitbanner