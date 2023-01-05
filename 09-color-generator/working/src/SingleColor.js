import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({color: {type, weight, rgb}}) => {
    const bgColor = {backgroundColor: `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`}
    const colorClass = `color ${type==="shade" ? "color-light" : false }`
    return (
      <article className={colorClass} style={bgColor}>
          <p className="percent-value">{weight}%</p>
          <p className="color-value">{rgbToHex(rgb[0], rgb[1], rgb[2])}</p>
      </article>
  )
}

export default SingleColor
