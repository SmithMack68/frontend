import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { headers } from '../../Globals'

const AddReviewToSpell = () => {
  const [state, setState] = useState({
    username:'',
    comment: ''
  })

  const { spell_id } = useParams()
  const navigate = useNavigate()

  const handleChange = (e) => {
    setState({...state,
    [e.target.name]:e.target.value})
  }

  const handleSubmit =(e) => {
    e.preventDefault()
    fetch(`/spells/${spell_id}/reviews`, {
      method: 'POST',
      headers,
      body: JSON.stringify(state)
    })
    .then(resp => resp.json())
    .then(data => {
      setState(data)
      console.log(data)
      navigate(`/spells/${spell_id}`)
    })

  }
  return (
    <div className="new-review-container">
      <div>
        <h1>Add a Review</h1>
        <form onSubmit={ handleSubmit }>
        <div>
          <input
            type='text'
            name='username'
            value={state.username}
            onChange={handleChange}></input>
        </div>
        <div>
          <textarea
            type='text'
            rows='4'
            cols='50'
            name='comment'
            value={state.comment}
            onChange={handleChange}></textarea>
        </div>
        <input style={{ fontFamily: 'cursive'}}type="submit" value="submit"/>
        </form>
      </div>
    </div>
  )
}

export default AddReviewToSpell