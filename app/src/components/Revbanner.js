import React from 'react'
import '../style/style.css'
import {ReactComponent as Rev } from '../img/rev.svg'
import {ReactComponent as Sale} from '../img/sales.svg'
import {ReactComponent as Purch} from '../img/purch.svg'


function Revbanner() {
  return (
    <div className='revbanner'>
        <div className='revs'>
            <div className='boxes5'>
                <h1>Revenue</h1>
                <div className='minirev'>
                    <div className='revsale'>
                        <div>
                            <h1>$32123</h1>   
                            <p>+3.5%</p>
                        </div>
                        <p>11.38% Since last month</p>
                    </div>

                    <Rev className='revimg'/>
                </div>
            </div>
            <div className='boxes5'>
                <h1>Sales</h1>
                <div className='minirev'>
                    <div className='revsale'>
                        <div>
                            <h1>$45850</h1>   
                            <p>+8.3%</p>
                        </div>
                        <p> 9.61% Since last month</p>
                    </div>

                    <Sale className='revimg'/>
                </div>
            </div>
            <div className='boxes5'>
                <h1>Purchase</h1>
                <div className='minirev'>
                    <div className='revsale'>
                        <div>
                            <h1>$2039</h1>   
                            <p>-2.1%</p>
                        </div>
                        <p> 2.27% Since last month</p>
                    </div>

                    <Purch className='revimg'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Revbanner