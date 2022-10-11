import React from 'react'

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

// icons
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined'
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'

const Tables = ({ heading, keys, rowData }) => {
  // css object
  const iconStyle = {
    fontSize: '1.5rem',
    stroke: '#ffffff',
    strokeWidth: 1
  }
  return (
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

                    {/* view more icon */}
                    <TableCell align = 'left'>
                        <Typography>
                            <VisibilityOutlinedIcon sx={iconStyle}/>
                        </Typography>
                    </TableCell>

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
                            <ModeEditOutlineOutlinedIcon sx={iconStyle}/>
                            <DeleteOutlineOutlinedIcon sx={iconStyle}/>
                        </Typography>
                    </TableCell>
                </TableRow>
            ))}
        </TableBody>

      </Table>
    </TableContainer>
  )
}

export default Tables
