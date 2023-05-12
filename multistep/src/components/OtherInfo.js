import React from 'react'

function OtherInfo({formData, setFormData}) {
  return (
    <div className='other-info-container'>
      <input 
        type='text' 
        placeholder='Nationality...'
        value={formData.nationatily} 
        onChange={(event) => 
          setFormData({...formData, nationatily: event.target.value})}
      />
      <input 
        type='text' 
        placeholder='Other...'
        value={formData.other} 
        onChange={(event) => 
          setFormData({...formData, other: event.target.value})}
      />
    </div>
  )
}

export default OtherInfo