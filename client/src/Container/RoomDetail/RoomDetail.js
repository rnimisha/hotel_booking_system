import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
// components
import Header from '../../Components/Header/Header'
import RoomInfo from '../../Components/RoomInfo/RoomInfo'

// styles
import { Image, ImageContainer, MainContainer } from './RoomDetailStyled'
import roomImg from '../../Assets/images/roomimg.jpeg'
import Ammenties from '../../Components/Ammenties/Ammenties'

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
              <Image src={roomImg} alt="" />
            </ImageContainer>
            <RoomInfo data ={roomDetail}/>
        </MainContainer>
        <Ammenties data ={roomDetail.ammenties}/>
    </>
  )
}

export default RoomDetail
