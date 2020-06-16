import ReactDOM from 'react-dom'
import React from 'react'
import { useSpring, animated } from 'react-spring'

const interp = i => r => `translate3d(${-700 *Math.sin(r + (i * 2 * Math.PI) / 5)+600}px, ${100 *
    Math.sin(r + (i * 2 * Math.PI) / 5)-230}px, 0)`

export default function AnimatedBackground(props) {
    let items = []
    for (let i=0;i < 100; i++ )
        items.push(i*Math.random())

  const { radians } = useSpring({
    to: async next => {
      while (1) await next({ radians: 2 * Math.PI  })
    },
    from: { radians: 0 },
    // config: { duration: 3500 },
    config: { duration: 50000 },
    reset: true,
  })
  return <div className="star-box">
      {items.map((i, index) => <animated.div key={index} className="script-bf-box" style={{ transform: radians.interpolate(interp(i)) }} />)}</div>
}