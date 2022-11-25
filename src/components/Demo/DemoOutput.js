import React from 'react'
import DemoPara from './DemoPara'

const DemoOutput = (props) => {
    console.log('DemoOutput');
  return  <DemoPara>{props.show ? 'This Is New Paragraph' : ''}</DemoPara>
  
}

export default DemoOutput