import React from 'react'
import { useNavigate } from 'react-router-dom'

const SpellCard = ({spell, deleteSpell }) => {
    const navigate = useNavigate()

    const deleteSpellButton = (spell) => {
      if (spell.permitted){
      return <button onClick={() => deleteSpell(spell.id)} style={{fontFamily: 'cursive'}}>Delete Spell</button>
    }
  }

    
  return (
    <div className='card' style={{ textAlign: 'center', fontSize: 20 }}>
        <h2 style={{fontFamily: "cursive"}}>{spell.name}</h2>
        <img src={ spell.image } alt="name" height={250} width={350} quality={.05}/>
        <p style={{fontFamily: "cursive", marginLeft: 30, marginRight:30}}>Description: {spell.short_description}</p>
        <button onClick={ () => navigate(`/spells/${spell.id}`) } style={{fontFamily: "cursive"}}>Details</button>
        {deleteSpellButton(spell)}
        {/* <button onClick={() => deleteSpell(spell.id)} style={{fontFamily: 'cursive'}}>Delete Spell</button><button style={{fontFamily: 'cursive'}}>Edit Spell</button> */}
    </div>
  )
}

export default SpellCard