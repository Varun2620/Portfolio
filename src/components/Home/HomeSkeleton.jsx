import React from 'react'
import {HashLoader} from 'react-spinners'

function HomeSkeleton() {
  return (
    <div
        style={
            {
                height: '80vh',
                display: 'flex',
                justifycontent: 'center',
                alignItems: 'center',
                margin: '0vh auto'
            }
        }
    >
        <HashLoader color='black' size={75} style={{
            margin: '0vh auto',
            display: 'flex',
            rotate: '45deg'
        }}/>
    </div>
  )
}

export default HomeSkeleton
