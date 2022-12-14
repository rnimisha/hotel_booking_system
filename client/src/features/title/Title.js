import React from 'react'
import { useSelector } from 'react-redux'

const Title = () => {
  const title = useSelector((state) => state.title.title)

  return (
    <div style={{
      borderBottom: '01px solid #ececec',
      padding: '20px',
      fontSize: '1.8rem',
      fontWeight: '100',
      color: '#877147',
      marginBottom: '15px'
    }}>
       {title}
    </div>
  )
}

export default Title
