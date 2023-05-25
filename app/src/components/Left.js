import React from 'react'
import "../style/style.css"
import menuuser from '../img/menuuser.png'
import {ReactComponent as Menu} from '../img/menu.svg'
import {ReactComponent as Dash} from '../img/dash.svg'
import {ReactComponent as Widgets} from '../img/widgets.svg'
import {ReactComponent as Page} from '../img/page.svg'
import {ReactComponent as Side} from '../img/side.svg'
import {ReactComponent as Basic} from '../img/basic.svg'
import {ReactComponent as Advanced} from '../img/advanced.svg'
import {ReactComponent as Form} from '../img/form.svg'
import {ReactComponent as Tables} from '../img/tables.svg'
import {ReactComponent as Editors} from '../img/editors.svg'
import {ReactComponent as Charts} from '../img/charts.svg'
import {ReactComponent as Maps} from '../img/maps.svg'
import {ReactComponent as Notif} from '../img/notif.svg'
import {ReactComponent as Icons} from '../img/icons.svg'
import {ReactComponent as Celendar} from '../img/celendar.svg'
import {ReactComponent as Email} from '../img/email.svg'
import {ReactComponent as Todo} from '../img/todo.svg'
import {ReactComponent as Gallery} from '../img/gallery.svg'
import {ReactComponent as General} from '../img/general.svg'
import {ReactComponent as Document} from '../img/document.svg'

function Left() {

  return (
    <div className="leftmenu">     
        <div className="menu">
            <div className="minimenu1">
                   <div class="container loader">
                    <span>C</span>
                    <span>O</span>
                    <span>R</span>
                    <span>O</span>
                    <span>N</span>
                    <span>A</span>
                    </div> 

                <div className='henry'>
                    <img src={menuuser} className="box1"/>
                    <p className="box2">Henry Klein</p>
                    <p className="box3">Gold Member</p>
                </div>

                <div className='leftmen'>
                  <Menu className="leftminimen"/>
                </div>
            </div>

            <div className="minimenu2">
              <p>Navigation</p>
              <div className="menus1">
                <div className='boxes'>
                  <div>
                  <Dash/>   
                  </div>
                  <h1>Dashboard</h1>
                </div>
                <div className='boxes'>
                  <div>
                <Widgets/>
                  </div>
                  <h1>Widgets</h1>
                </div>
                <div className='boxes'>
                  <div>
                  <Page/>
                  </div>
                  <h1>Page layouts</h1>
                </div>
                <div className='boxes'>
                  <div>
                  <Side/>
                  </div>
                  <h1>Sidebar layouts</h1>
                </div>
                <div className='boxes'>
                  <div>
                    <Basic/>
                  </div>
                  <h1>Basic UI Elements</h1>
                </div>
                <div className='boxes'>
                  <div>
                  <Advanced/>
                  </div>
                  <h1>Advanced Elements</h1>
                </div>
                <div className='boxes'>
                  <div>
                  <Form/>
                  </div>
                  <h1>Form Elements</h1>
                </div>
                <div className='boxes'>
                  <div>
                  <Tables/>
                  </div>
                  <h1>Tables</h1>
                </div>
                <div className='boxes'>
                  <div>
                <Editors/>
                  </div>
                  <h1>Editors</h1>
                </div>
                <div className='boxes'>
                  <div>
                  <Charts/>
                  </div>
                  <h1>Charts</h1>
                </div>
                <div className='boxes'>
                  <div>
                  <Maps/>
                  </div>
                  <h1>Maps</h1>
                </div>
                <div className='boxes'>
                  <div>
                    <Notif/>
                  </div>
                  <h1>Notification</h1>
                </div>
                <div className='boxes'>
                  <div>
                    <Icons/>
                  </div>
                  <h1>Icons</h1>
                </div>
              </div>
            </div>

            <div className="minimenu3">
              <p>More pages</p>

              <div className="menus2">
                <div className='boxes2'>
                  <div>
                  <Celendar/>
                  </div>
                  <h1>Calendar</h1>
              </div>
              <div className='boxes2'>
                    <div>
                  <Email/>
                  </div>
                  <h1>Email</h1>
              </div>
              <div className='boxes2'>
                    <div>
                  <Todo/>
                  </div>
                  <h1>Todo list</h1>
              </div>
              <div className='boxes2'>
                <div>
                  <Gallery/>
                  </div>
                  <h1>Gallery</h1>
              </div>
              <div className='boxes2'>
                  <div>
                  <General/>
                  </div>
                  <h1>General Pages</h1>
              </div>
              <div className='boxes2'>
                  <div>
                  <Document/>
                  </div>
                  <h1>Documentation</h1>
              </div>
              </div>
              
            </div>
        </div>
    </div>
  )
}

export default Left