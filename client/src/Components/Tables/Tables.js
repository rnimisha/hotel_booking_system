import React from 'react'
import { useDispatch } from 'react-redux'
import { handleOpen } from '../../features/modal/modalSlice'

// material ui
import {
  Table,
  TableBody,
  TableHead,
  TableContainer,
  TableRow,
  TableCell,
  Typography
} from '@mui/material'

// styled component
import { EditIcon, DeleteIcon, AddIcon, ViewIcon } from './TableStyled'
import ConfirmBox from '../ConfirmBox/ConfirmBox'
import { NavLink } from 'react-router-dom'

const Tables = ({ heading, keys, rowData, modalComponent, modalname, editmodalname, setData, text, clearId, deleteEvent }) => {
  const dispatch = useDispatch()
  return (
    <>
      <TableContainer sx={{
        borderRadius: '25px',
        borderBottom: 'none',
        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 0px 4px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px'
      }}>
        <Table sx={{ minWidth: 650 }}>

          {/* --------- Table Heading --------------- */}
          <TableHead sx= {{ backgroundColor: '#d4cec3' }}>
            <TableRow>
              { heading.map((item, id) =>
                  <TableCell key={id} align='left'>
                      <Typography sx={{ color: '#877147', fontSize: '1.2rem' }}>
                          {item}
                      </Typography>
                  </TableCell>
              )}
            </TableRow>
          </TableHead>

          {/* --------- Table Rows --------------- */}
          <TableBody>
              {rowData.map((data, id) => (
                  <TableRow key={data._id || id} >

                      {/* other rows */}
                      {keys.map((item, id) =>
                          <TableCell key={id} align="left">
                              <Typography sx={{ fontWeight: '100' }}>
                                  {data[item]}
                              </Typography>
                          </TableCell>
                      )}

                      {/* // actions icon */}
                      <TableCell align="left">
                          <Typography>
                              <DeleteIcon onClick={() => {
                                dispatch(handleOpen('confirmbox'))
                                setData(data._id)
                              }}/>
                              <EditIcon onClick={() => {
                                dispatch(handleOpen(editmodalname))
                                setData(data._id)
                              }
                              }/>
                              <AddIcon onClick={() => {
                                dispatch(handleOpen(modalname))
                                setData(data._id)
                              }}/>
                          </Typography>
                      </TableCell>
                      <TableCell align="left">
                        <NavLink to={'/admin/roomlist/' + data._id}>
                          <Typography>
                              <ViewIcon onClick={null}/>
                          </Typography>
                        </NavLink>

                      </TableCell>
                  </TableRow>
              ))}
          </TableBody>

        </Table>
      </TableContainer>
     {modalComponent}
     <ConfirmBox text={text} clickEvent={deleteEvent} clearId={clearId}/>
    </>
  )
}

export default Tables
