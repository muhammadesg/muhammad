import React from 'react'
import '../style/style.css'
import msimg1 from '../img/msimg1.png'
import msimg2 from '../img/msimg2.png'
import msimg3 from '../img/msimg3.png'
import msimg4 from '../img/msimg4.png'
import msimg5 from '../img/msimg5.png'
import msimg6 from '../img/msimg6.png'
import msimg7 from '../img/msimg7.png'

function Messagebanner() {
  return (
    <div className='messagebanner'>
        <div className='mbanners'>
            
            <div className='boxes6'>
                <div className='msview'>
                    <p>Messages</p>
                    <p>View all</p>
                </div>

                <div className='mses'>
                    <div className='ms1'>
                        <img src={msimg1}/>
                        <div className='minims1'>
                            <div>
                                <p>Leonard</p>
                                <p>5 minutes ago</p>
                            </div>
                            <p>Well, it seems to be working now.</p>
                        </div>
                    </div>
                    <div className='ms2'>
                    <img src={msimg2}/>
                        <div className='minims2'>
                            <div>
                                <p>Luella Mills</p>
                                <p>10 Minutes Ago</p>
                            </div>
                            <p>Well, it seems to be working now.</p>
                        </div>
                    </div>
                    <div className='ms3'>
                    <img src={msimg3}/>
                        <div className='minims3'>
                            <div>
                                <p>Ethel Kelly</p>
                                <p>2 Hours Ago</p>
                            </div>
                            <p>Please review the tickets</p>
                        </div>
                    </div>
                    <div className='ms4'>
                    <img src={msimg4}/>
                        <div className='minims4'>
                            <div>
                                <p>Herman May</p>
                                <p>4 Hours Ago</p>
                            </div>
                            <p>Thanks a lot. It was easy to fix it.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='boxes7'>

                <div className='msview2'>
                    <p>Portfolio Slide</p>
                    <div>
                        <button><img src={msimg5}/></button>
                        <button><img src={msimg6}/></button>
                    </div>
                </div>
                    <div className='msimg1'>
                        <img src={msimg7}/>
                    </div>
                

                    <div className='ms5'>
                        <img src={msimg1}/>
                        <div className='minims5'>
                            <div>
                                <p>Leonard</p>
                                <p>5 minutes ago</p>
                            </div>
                            <p>Well, it seems to be working now.</p>
                        </div>
                    </div>

                    <p className='msp'>Well, it seems to be working now. </p>

                    <div className='mswell'>
                        <div></div>
                        <div></div>
                    </div>

            </div>

            <div className='boxes8'>
                <p>To do list</p>
                <div className='msadd'>
                   <input placeholder='enter task..' type="text" />

                    <button>Add</button>
                </div>

                <div className="mstodo">
                    <div className='ms6'>
                        <div>
                            <input type="checkbox"/>
                            <p>Pick up kids from school</p>
                        </div>
                        <button>x</button>
                        
                    </div>

                    <div className='ms7'>
                        <div>
                            <input type="checkbox"/>
                            <p>Pick up kids from school</p>
                        </div>
                        <button>x</button>
                    </div>

                    <div className='ms8'>
                        <div>
                            <input type="checkbox"/>
                            <p>Pick up kids from school</p>
                        </div>
                        <button>x</button>
                    </div>

                    <div className='ms9'>
                        <div>
                            <input type="checkbox"/>
                            <p>Pick up kids from school</p>
                        </div>
                        <button>x</button>
                    </div>

                    <div className='ms10'>
                        <div>
                            <input type="checkbox"/>
                            <p>Pick up kids from school</p>
                        </div>
                        <button>x</button>
                    </div>

                </div>
            </div>

        </div>
    </div>
  )
}

export default Messagebanner