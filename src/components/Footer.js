import React from 'react'

export default function Footer(props) {

  let footStyle={
    border: '1px solid #1c1d1f'
  }
  return (
    <div className={`container-fluid fs-3 text-center bg-${props.mode === 'dark' ? 'dark' : 'white'} text-${props.mode === 'dark' ? 'white' : 'black'}`} style={footStyle}>
      Made with &#128155; by Vishwas Vijay
    </div>
  )
}
