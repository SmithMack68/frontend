import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { headers } from '../../Globals'

const ReviewForm = () => {
  const [ formData, setFormData ] = useState({
    username: '',
    comment: ''
  })
  const navigate = useNavigate()

const handleChange = (e) => {
  setFormData({...formData,
  [e.target.name]:e.target.value })
}

const handleSubmit = (e) => {
  e.preventDefault()

  fetch('/reviews',{
    method: 'POST',
    headers,
    body:JSON.stringify(formData)
  })
  .then(resp => resp.json())
  .then(data => {
    setFormData(data)
    navigate('/reviews')
  })

}



  return (
    <div className='new-review-container'>
      <h1>Leave a Review</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}>
          </input>
        </div>
        <div>
          <input
            type="textarea"
            name="comment"
            value={formData.comment}
            onChange={handleChange}>
          </input>
        </div>
        <input style={{ fontFamily: 'cursive'}}type="submit" value="submit"/>
      </form>
    </div>
  )
}

export default ReviewForm