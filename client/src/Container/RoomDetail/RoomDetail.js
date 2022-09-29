import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
// components
import Header from '../../Components/Header/Header'
import RoomInfo from '../../Components/RoomInfo/RoomInfo'
import headerImg from '../../Assets/images/header2.jpeg'

// styles
import { Image, ImageContainer, MainContainer } from './RoomDetailStyled'
import roomImg from '../../Assets/images/roomimg.jpeg'
import Ammenties from '../../Components/Ammenties/Ammenties'
import ModalForm from '../../Components/ModalForm/ModalForm'

const RoomDetail = () => {
  // room id from url
  const { id } = useParams()

  // state for room details fetched from api
  const [roomDetail, setRoomDetail] = useState([])

  // modal
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  useEffect(() => {
    fetch('http://localhost:3000/rooms/' + id).then((response) => {
      return response.json()
    }).then((data) => {
      setRoomDetail(data.data)
    }).catch((error) => {
      console.log('Error : ' + error)
    })
  }, [])
  return (
    <>
        <Header height='45vh' headerImg={headerImg}/>
        <MainContainer>
            <ImageContainer>
              <Image src={roomImg} alt="" />
            </ImageContainer>
            <RoomInfo data ={roomDetail} handleOpen={handleOpen}/>
        </MainContainer>
        <Ammenties data ={roomDetail.ammenties}/>
        <ModalForm open={open} handleClose ={handleClose} id={id}/>
    </>
  )
}

export default RoomDetail
