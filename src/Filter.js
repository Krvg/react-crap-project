import React from 'react'

const Filter = ({refs, options, setOption, setIsComponentVisible}) => {

  return (
    <div 
        ref={refs}
        className="options"
    >
        <ul>
            {options.map((option) =>(
                <li onClick={() => {
                  setOption(option)
                  setIsComponentVisible(false)
                }}>{option}</li>
            ))}
        </ul>
    </div>
  )
}

export default Filter