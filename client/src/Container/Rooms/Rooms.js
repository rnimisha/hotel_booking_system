import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changeCount } from '../../features/page/pageSlice'

// components
import Filter from '../../Components/Filter/Filter'
import Header from '../../Components/Header/Header'
import IndividualRoom from '../../Components/IndividualRoom/IndividualRoom'

// styles
import { RoomContainer } from './RoomsStyled'

// images
import headerImg from '../../Assets/images/header1.jpeg'
import Paginate from '../../Components/Paginate/Paginate'

const Rooms = () => {
  const page = useSelector((state) => state.page.page)
  const dispatch = useDispatch()
  const [rooms, setRooms] = useState([])
  const [filterData, setFilterDate] = useState({
    roomtype: '',
    capacity: null,
    checkin: '',
    checkout: ''
  })

  useEffect(() => {
    let query = `http://localhost:3000/rooms/?page=${page}&roomtype=${filterData.roomtype}`

    if (filterData.capacity !== null) {
      query += `&capacity=${filterData.capacity}`
    }
    if (filterData.checkin !== '') {
      query += `&checkin=${filterData.checkin}`
    }
    if (filterData.checkout !== '') {
      query += `&checkout=${filterData.checkout}`
    }

    fetch(query).then((response) => {
      return response.json()
    }).then((data) => {
      setRooms(data.data)
      dispatch(changeCount(parseInt(data.count)))
    }).catch((error) => {
      console.log('Error : ' + error)
    })
  }, [filterData, page])

  return (
    <>
      <Header
      height='45vh'
      headerImg= {headerImg}
      text = 'Rooms'
      />
      <Filter filterData= {filterData} setFilterDate={setFilterDate}/>
      <RoomContainer>
        {
          rooms.map((item, id) => {
            return (
              <IndividualRoom
              key={id}
              image = {item.image}
              price ={item.price}
              name={item.name}
              people={item.capacity}
              bedrooms={item.bedrooms}
              id={item._id}/>
            )
          })
        }
      </RoomContainer>
      <Paginate/>
    </>
  )
}

export default Rooms
