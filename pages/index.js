import React from 'react'

import dynamic from 'next/dynamic'

const Hero = dynamic(() => import('../components/main/Hero'))
const index = () => {
  return (
    <div>
      <Hero/>
    
    </div>
  )
}

export default index