import React from 'react'

const Filter = ({options, active, setActive, setOption}) => {

  return (
    <div 
        className="options"
        onClick={() => setActive(false)}
        style={{visibility: active ? "visible" : "hidden"}}
    >
        <ul>
            {options.map((option) =>(
                <li onClick={() => {
                    setActive(false)
                    setOption(option)
                }}>{option}</li>
            ))}
        </ul>
    </div>
  )
}

export default Filter