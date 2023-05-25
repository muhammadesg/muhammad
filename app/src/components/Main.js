import React from 'react'
import Currentbanner from './Currentbanner'
import Long from './Long'
import Mainbanner from './Mainbanner'
import Openbanner from './Openbanner'
import Revbanner from './Revbanner'
import Messagebanner from './Messagebanner'
import Visitbanner from './Visitbanner'
import Footer from './Footer'

function Main() {
  return (
    <div className='main'>
        <Mainbanner/>
        <Long/>  
        <Openbanner/>  
        <Revbanner/>
        <Currentbanner/>
        <Messagebanner/>
        <Visitbanner/>
        <Footer/>
    </div>
  )
}

export default Main