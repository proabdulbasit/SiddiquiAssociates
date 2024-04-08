import React from 'react'

const Serviceslist = (props) => {
  return (
    <>
      {props.list.map((value)=>
      <li style={{padding:"10px"}}><strong>{value.heading}</strong> {value.value}</li>
      )}

        </>
  )
}

export default Serviceslist