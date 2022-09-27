import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
// components
import Header from '../../Components/Header/Header'
import RoomInfo from '../../Components/RoomInfo/RoomInfo'

// styles
import { ImageContainer, MainContainer } from './RoomDetailStyled'

const RoomDetail = () => {
  const { id } = useParams()
  const [roomDetail, setRoomDetail] = useState([])
  useEffect(() => {
    fetch('http://localhost:3000/rooms/' + id).then((response) => {
      return response.json()
    }).then((data) => {
      setRoomDetail(data.data)
      console.log(data.data)
    }).catch((error) => {
      console.log('Error : ' + error)
    })
  }, [])
  return (
    <>
        <Header height='45vh'/>
        <MainContainer>
            <ImageContainer>
d
            </ImageContainer>
            <RoomInfo/>
        </MainContainer>
        <div style={{ height: '400px' }} data ={roomDetail}>
            jjj
        </div>
    </>
  )
}

export default RoomDetail
