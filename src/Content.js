import React from 'react'
import ContentNav from './ContentNav'
import ContentFlags from './ContentFlags'

const Content = ({data, fetchError, isLoading}) => {
  return (
    <div className='content'>
        <ContentNav />
        <ContentFlags 
            fetchError={fetchError}
            isLoading={isLoading}
            data={data}
        />
    </div>
  )
}

export default Content