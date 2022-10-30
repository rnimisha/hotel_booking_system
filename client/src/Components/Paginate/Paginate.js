import * as React from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { changePage } from '../../features/page/pageSlice'

import { Pagination, Stack } from '@mui/material'

const Paginate = () => {
  const page = useSelector((state) => state.page.page)
  const dispatch = useDispatch()
  return (
     <Stack spacing={2} mb={4}>
      <Pagination
      count={10}
      page={page}
      shape="rounded"
      onChange = {(event, value) => dispatch(changePage(value))}
      sx={{ display: 'flex', justifyContent: 'center' }}
      />
    </Stack>
  )
}

export default Paginate
