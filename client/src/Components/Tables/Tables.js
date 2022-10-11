import React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import Paper from '@mui/material/Paper'

const Tables = ({ heading, keys, rowData }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            {
                heading.map((item, id) =>
                    <TableCell key={id}>{item}</TableCell>
                )
            }
          </TableRow>
        </TableHead>
        <TableBody>
        {rowData.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell>
                later
              </TableCell>
              {
                keys.map((item, id) =>
                    <TableCell key={id} align="left">{row[item]}</TableCell>
                )
              }
              <TableCell align="left">later</TableCell>
            </TableRow>
        ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Tables
