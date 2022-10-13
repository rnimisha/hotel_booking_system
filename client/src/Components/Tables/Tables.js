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
import { EditIcon, DeleteIcon, AddIcon } from './TableStyled'

const Tables = ({ heading, keys, rowData, modalComponent, modalname }) => {
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
                              <DeleteIcon/>
                              <EditIcon/>
                              <AddIcon onClick={() => { dispatch(handleOpen(modalname)) }}/>
                          </Typography>
                      </TableCell>
                  </TableRow>
              ))}
          </TableBody>

        </Table>
      </TableContainer>
     {modalComponent}
    </>
  )
}

export default Tables
