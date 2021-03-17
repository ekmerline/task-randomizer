import React from 'react'
import { styled } from '@material-ui/core/styles'
import { spacing } from "@material-ui/system"
import DefaultButton from '@material-ui/core/Button'
import CancelPresentationIcon from '@material-ui/icons/CancelPresentation'


const Button = styled(DefaultButton)(spacing)

const Task = props => {

    const { task, removeTask} = props

    const handleClick = () => {
        removeTask(task)
    }

    return (
        <Button variant="contained" color="primary" m={1}>{task}&ensp;<CancelPresentationIcon onClick={handleClick}/></Button>
    )
}

export default Task