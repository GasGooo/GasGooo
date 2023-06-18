import Wave from 'react-wavify'
import React from 'react'

export default function Wavee() {
    return(
    <Wave className="wave" fill='#8BACAA'
            paused={false}
            options={{
            height: 10,
            amplitude: 70,
            speed: 0.18,
            points: 2
            }}
    />
)};