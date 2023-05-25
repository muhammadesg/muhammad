import React from 'react'
import '../style/style.css'
import total from '../img/total.png'
import {ReactComponent as Admin} from '../img/admin.svg'
import {ReactComponent as Word} from '../img/word.svg'
import {ReactComponent as Project} from '../img/project.svg'
import {ReactComponent as Broad} from '../img/broad.svg'
import {ReactComponent as Ui} from '../img/ui.svg'

function Openbanner() {
  return (
    <div className='openbanner'>
        <div className='openbans'>
            
            <div className='openleft'>
                <h1>Transaction History</h1>
                <div className='opch'>
                    <div className='tot'>
                        <div>
                            <p>$1200</p>
                            <p>Total</p>
                        </div>
                        
                    </div>
                    <img src={total}/>
                </div>
                
                <div className='miniopen'>
                    <div>
                        <p>Tranfer to Paypal</p>
                        <p>07 Jan 2019, 09:12AM</p>
                    </div>
                    <h1>$236</h1>
                     
                </div>
                <div className='miniopen'>
                    <div>
                        <p>Tranfer to Stripe</p>
                        <p>07 Jan 2019, 09:12AM</p>
                    </div>
                    <h1>$593</h1>
                </div>
            </div>

            <div className='openright'>
                <div className='openpro'>
                    <h1>Open Projects</h1>
                    <p>Your data status</p>
                </div>

                <div className='openprojects'>
                    <div className='boxes4'>
                        <div className='openadmin'>
                            <div className='opimg'>
                                <Admin className='doc'/>
                            </div>
                            
                            <div className='openad'>
                                <p>Admin  dashboard design</p>
                                <p>Broadcast web app mockup</p>
                            </div>
                        </div>

                        <div className='openminut'>
                            <p>15 minutes ago</p>
                            <p>30 tasks, 5 issues</p>
                        </div>
                        
                    </div>
                    <div className='boxes4'>
                    <div className='openadmin'>
                            <div className='opimg op1'>
                                <Word className='doc'/>
                            </div>
                            <div className='openad'>
                                <p>Wordpress Theme Development</p>
                                <p>Upload new design</p>
                            </div>
                        </div>

                        <div className='openminut'>
                            <p>1 hour ago</p>
                            <p>23 tasks, 3 issues</p>
                        </div>
                    </div>

                    <div className='boxes4'>
                    <div className='openadmin'>
                            <div className='opimg op2'>
                                <Project className='doc'/>
                            </div>
                            <div className='openad'>
                                <p>Project meeting</p>
                                <p>New project discussion</p>
                            </div>
                        </div>

                        <div className='openminut'>
                            <p>35 minutes ago</p>
                            <p>15 tasks, 2 issues</p>
                        </div>
                    </div>

                    <div className='boxes4'>
                    <div className='openadmin'>
                            <div className='opimg op3'>
                                <Broad className='doc'/>
                            </div>
                            <div className='openad'>
                                <p>Broadcast Mail</p>
                                <p>Sent release details to team</p>
                            </div>
                        </div>

                        <div className='openminut'>
                            <p>55 minutes ago</p>
                            <p>35 tasks, 7 issues</p>
                        </div>  
                    </div>  

                    <div className='boxes4'>
                    <div className='openadmin'>
                            <div className='opimg op4'>
                                <Ui className='doc'/>
                            </div>
                            <div className='openad'>
                                <p>UI Design</p>
                                <p>New application planning</p>
                            </div>
                        </div>

                        <div className='openminut'>
                            <p>50 minutes ago</p>
                            <p>27 tasks, 4 issues</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Openbanner