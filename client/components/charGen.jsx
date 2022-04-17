// importing tools
import React from 'react'

// importing randomisers
import ClassSub from '../lib/classSub'
import ClassType from '../lib/classType'
import DeathVerb from '../lib/deathVerb'
import DeathAdverb from '../lib/deathAdverb'

function CharGen() {
  return (
    <div>
      <h1>Character Generation</h1>
      <img src='/images/characters/PH-char.png' alt='placeholder for character portrait'/>
      <h2>Name: Placeholder Johnson</h2>
      <p>You were a {`${ClassSub()} ${ClassType()}`}... until you {`${DeathVerb()}${DeathAdverb()}.`}</p>
      <h2>Skillset</h2>
      <p>Your skillset determines how successful you&apos;ll be at different actions. Though life is full of many skills, for your convenience, we have divided them into two families, and each family into two schools.</p>
      <ul><li><strong>MIND:</strong> A measure of your mental power. For those with a quick wit and a sharp mind.</li>
        <ul>
          <li><strong>IQ:</strong> Logical analysis, pattern recognition, awareness, and encyclopaedic knowledge. Outsmart your opponents.</li>
          <li><strong>EQ:</strong> Intuition, empathy, charisma, manipulation, communication skills (and communication kills). Dance the social dance; outwit your detractors.</li>
        </ul>
        <li><strong>BODY:</strong> A measure of your physical power. For those with a quick hand and a sharp jawline.</li>
        <ul>
          <li><strong>Flesh:</strong> Control over your body. Move fast, respond faster. Sleight of hand, dodging, jumping. Outrun your assailants.</li>
          <li><strong>Bone:</strong> The resilience of your body. Take hard hits, recover from injury. Hold your breath, run for miles. Outlast the enemy.</li>
        </ul>
      </ul>
    </div>
  )
}

export default CharGen
