import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { handleClose } from '../../features/modal/modalSlice'

// material ui
import {
  Modal
} from '@mui/material'

// styled components
import { Container } from '../ModalForm/ModalFormStyled'

// style
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '60%',
  height: '70%',
  bgcolor: 'background.paper',
  borderRadius: '20px',
  boxShadow: 24,
  p: 4
}

const RoomForm = () => {
  const open = useSelector((state) => state.modal.open)
  const dispatch = useDispatch()
  return (
    <div>
        <Modal
        open={open}
        onClose={() => { dispatch(handleClose()) }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        <Container sx={style}>
            hello
        </Container>
        </Modal>
    </div>
  )
}

export default RoomForm
