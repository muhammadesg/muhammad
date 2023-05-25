import React from 'react'
import '../style/style.css'
import cur1 from '../img/curimg1.png'
import cur2 from '../img/curimg2.png'
import cur3 from '../img/curimg3.png'
import cur4 from '../img/curimg4.png'
import cur5 from '../img/curimg5.png'
import cur6 from '../img/curimg6.png'

function Currentbanner() {
  return (
    <div className='currentbanner'>
        <div className='curbanner'>
            <h1>Current Order details</h1>
            <div className='crbanners'>
                
        
                    <div className="cr1">
                        <input type="checkbox" />
                        <input type="checkbox" />
                        <input type="checkbox" />
                        <input type="checkbox" />
                        <input type="checkbox" />
                        <input type="checkbox" />
                    </div>

                    <div className="cr2">
                        <div>
                            <p>Client Name	</p>
                        </div>

                        <div>
                            <img src={cur1}/>
                            <p>Henry Klein</p>
                        </div>

                        <div>
                            <img src={cur2}/>
                            <p>Estella Bryan</p>
                        </div>

                        <div>
                            <img src={cur3}/>
                            <p>Lucy Abbott</p>
                        </div>

                        <div>
                            <img src={cur4}/>
                            <p>Peter Gill</p>
                        </div>

                        <div>
                            <img src={cur5}/>
                            <p>Sallie Reyes</p>
                        </div>
                    </div>

                    <div className="cr3">
                        <p>Order No</p>
                        <p>02312</p>
                        <p>02323</p>
                        <p>02344</p>
                        <p>02354</p>
                        <p>02365</p>
                    </div>

                    <div className="cr4">
                        <p>Product Cost</p>
                        <p>$14,500</p>
                        <p>$30,000</p>
                        <p>$15,100</p>
                        <p>$11,987</p>
                        <p>$4,700</p>
                    </div>

                    <div className="cr5">
                        <p>Project</p>
                        <p>Dashboard</p>
                        <p>Website</p>
                        <p>App design</p>
                        <p>Development</p>
                        <p>Website</p>

                        <div className='other'>
                            <img src={cur6} />
                        </div>
                        
                        <div className='other'>
                            <img src={cur6} />
                        </div>

                        <div className='other'>
                            <img src={cur6} />
                        </div>

                        <div className='other'>
                            <img src={cur6} />
                        </div>

                        <div className='other'>
                            <img src={cur6} />
                        </div>

                        <div className='other'>
                            <img src={cur6} />
                        </div>
                    </div>

                    <div className="cr6">
                        <p>Payment Mode</p>
                        <p>Credit card</p>
                        <p>Cash on delivered</p>
                        <p>Credit card</p>
                        <p>Online Payment</p>
                        <p>Credit card</p>
                    </div>

                    <div className="cr7">
                        <p>Start Date</p>
                        <p>04 Dec 2019</p>
                        <p>13 Jan 2019</p>
                        <p>13 Jun 2019</p>
                        <p>02 Dec 2019</p>
                        <p>06 Feb 2019</p>
                    </div>

                    <div className="cr8">
                        <p>Payment Status</p>
                        <button>Aproved</button>
                        <button>Pending</button>
                        <button>Rejected</button>
                        <button>Aproved</button>
                        <button>Aproved</button>
                    </div>

                

            

            </div>
        </div>
    </div>
  )
}

export default Currentbanner