import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'


const Spell = ({ spells }) => {
    const [ spell, setSpell ] = useState({})
    const { id } = useParams()

    useEffect(() => {
        const sp = spells.find(sp => sp.id.toString() === id)
        setSpell(sp);
    }, [id, spells])
   

  return (
      <div className='card-container' style={{ textAlign: 'center'}}>
        <h2 style={{fontFamily: "cursive", fontSize: 45}}>{ spell.name }</h2>
        <img src={ spell.image } alt="A spell" height={300} width={400}/>
        <p style={{fontFamily: "cursive", fontSize:30}}>Description: { spell.short_description }</p>
        <p style={{fontFamily: "cursive", fontSize:30}}>Requirements: { spell.requirements }</p>
        <h2 style={{fontFamily: "cursive", fontSize:45}}>Incantation: { spell.incantation }</h2>
        <button style={{fontFamily: "cursive", fontSize:30}}>Cast</button>
        <button style={{fontFamily: "cursive", fontSize:30}}>Reviews</button>
    </div>
  )
}

export default Spell