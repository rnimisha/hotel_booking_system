import styled, { css } from 'styled-components'
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined'

const sharedStyle = css`
    font-size: 1.5rem;
    stroke: #ffffff;
    stroke-width: 1;
    margin-left: 5px;
`

export const EditIcon = styled(ModeEditOutlineOutlinedIcon)`
    ${sharedStyle}
    &:hover{
        color: #58a865
    }
`

export const DeleteIcon = styled(DeleteOutlineOutlinedIcon)`
    ${sharedStyle}
    &:hover{
            color: #D8000C;
        }
`

export const AddIcon = styled(AddBoxOutlinedIcon)`
    ${sharedStyle}
    &:hover{
            color: #58a865
        }
`
