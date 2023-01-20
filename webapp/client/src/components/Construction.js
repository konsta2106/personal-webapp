import React from 'react'
import GearIcon from '@rsuite/icons/Gear';
import SpinnerIcon from '@rsuite/icons/legacy/Spinner';

const Construction = (props) => {
    console.log(props)
  return (
    <div id="skills" className="services bg-dark">
    <div className="py-5">
      <div className="container construction">
        <h1 className="skills-header">{props.header}</h1>
        <h5>Under construction</h5>
        <GearIcon spin style={{ fontSize: '2em' }} />
      </div>
    </div>
  </div>
  )
}

export default Construction