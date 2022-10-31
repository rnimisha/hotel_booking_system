import * as React from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { changePage } from '../../features/page/pageSlice'

import { Pagination, Stack } from '@mui/material'

const Paginate = () => {
  const { page, count } = useSelector((state) => state.page)

  const dispatch = useDispatch()
  return (
     <Stack spacing={2} mb={4}>
      <Pagination
      count={count}
      page={page}
      shape="rounded"
      onChange = {(event, value) => dispatch(changePage(value))}
      sx={{ display: 'flex', justifyContent: 'center' }}
      />
    </Stack>
  )
}

export default Paginate
