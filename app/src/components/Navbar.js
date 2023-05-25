import React from 'react'
import "../style/style.css"
import {ReactComponent as Menu} from '../img/menu.svg'
import {ReactComponent as Search} from '../img/search.svg'
import {ReactComponent as Mail1} from '../img/mail1.svg'
import {ReactComponent as Mail2} from '../img/mail2.svg'
import {ReactComponent as Mail3} from '../img/mail3.svg'
import user from '../img/user.png'
import {ReactComponent as Bot} from '../img/bot.svg'

function Navbar() {
  return (
      <div className='header'>
        <div className='container'>
          <div className="head">
            <div className="bhead1">

              <div className="menu">
                <Menu className="men"/>
              </div>

                    <div class="container loader">
                      <span>C</span>
                      <span>O</span>
                      <span>R</span>
                      <span>O</span>
                      <span>N</span>
                      <span>A</span>
                    </div>

              <div className="search">
                <Search/>
                <input placeholder='Search products' type="text" />
              </div>
            </div>

            <div className="bhead2">
              <div className="creat">
                <button><p>+</p> <p>Create New Project</p></button>
              </div>

              <div className="mails">
                <div>
                  <Mail1 className="mail"/>
                  <Bot className='botimg'/> 
                </div>
                <div><Mail2 className="mail"/></div>
                <div><Mail3 className="mail"/></div>
              </div>

              <div className="user">
                <img src={user}/>
                <p>Henry Klein</p>
                <Bot className='botimg'/>
              </div>
            </div>
          </div>


          <div className='head2'>
            <div className="search2">
                <Search/>
                <input placeholder='Search products' type="text" />
            </div>

              <div className="creat_mobile">
                <button><p>+</p></button>
              </div>
          </div>
        </div>
      </div>
  )
}

export default Navbar


