import React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import Paper from '@mui/material/Paper'

import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined'
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'

const Tables = ({ heading, keys, rowData }) => {
  const iconStyle = {
    fontSize: '1.5rem',
    stroke: '#ffffff',
    strokeWidth: 1
  }
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }}>

        <TableHead>
          <TableRow>
            { heading.map((item, id) =>
                <TableCell key={id} align='left'>{item}</TableCell>
            )}
          </TableRow>
        </TableHead>

        <TableBody>
            {rowData.map((data, id) => (
                <TableRow key={data._id || id} >

                    {/* // view more icon */}
                    <TableCell align = 'left'>
                        <VisibilityOutlinedIcon sx={iconStyle}/>
                    </TableCell>

                    {/* // other rows */}
                    {keys.map((item, id) =>
                        <TableCell key={id} align="left">{data[item]}</TableCell>
                    )}

                    {/* // actions icon */}
                    <TableCell align="left">
                        <ModeEditOutlineOutlinedIcon sx={iconStyle}/>
                        <DeleteOutlineOutlinedIcon sx={iconStyle}/>
                    </TableCell>
                </TableRow>
            ))}
        </TableBody>

      </Table>
    </TableContainer>
  )
}

export default Tables
