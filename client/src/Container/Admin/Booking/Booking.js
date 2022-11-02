import React from 'react'
import FormData from 'form-data'

const Booking = () => {
  const handleFile = (e) => {
    const form = new FormData()
    form.append('image', e.target.files[0])

    const requestOptions = {
      method: 'POST',
      body: form,
      dataType: 'jsonp'
    }

    fetch('http://localhost:3000/rooms/addroomtype', requestOptions)
  }
  return (
    <div>
      <input type="file" name="image" onChange={handleFile}/>
    </div>
  )
}

export default Booking
