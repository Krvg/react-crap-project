import React from 'react'
import ContentNav from './ContentNav'
import ContentFlags from './ContentFlags'

const Content = ({data}) => {
  return (
    <div className='content'>
        <ContentNav />
        <ContentFlags 
            data={data}
        />
    </div>
  )
}

export default Content