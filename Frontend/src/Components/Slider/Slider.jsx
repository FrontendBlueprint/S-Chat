import React from 'react'
import Search from "./Search"
import Logout from "./Logout"
import Header from '../Header/Header'
import Conversations from './Conversations'

function Slider() {
  return (
    <div className='w-[40%] h-[90%] bg-secondary px-5 py-5 rounded-2xl border border-gray-400 relative overflow-y-auto'>
      <Header />
      <Search />
      <Conversations />
      <Logout />
    </div>
  )
}

export default Slider