import React from 'react'
import Header from '../../Components/Header/Header'
import Slider from '../../Components/Slider/Slider'
import ChatArea from '../../Components/Message/ChatArea'


function Home() {
  return (
    <div className='w-full h-screen overflow-hidden'>
      <div className="flex justify-start items-center gap-5 h-screen px-5">
        <Slider />
        <ChatArea />
      </div>
    </div>
  )
}

export default Home