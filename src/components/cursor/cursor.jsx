import React from 'react'
import AnimatedCursor from 'react-animated-cursor'
const Cursor = () => {
  return (
    <AnimatedCursor 
    innerSize={15}
    outerSize={15}
    color='0, 0, 0'
    outerAlpha={0.2}
    innerScale={0.4}
    outerScale={3}
    clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'input',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]}
    />
  )
}

export default Cursor