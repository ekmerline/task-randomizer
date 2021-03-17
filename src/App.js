import React, { useState, useEffect } from 'react'
import Box from '@material-ui/core/Box'
import TextField from '@material-ui/core/TextField'
import Task from './components/Task'
import Button from '@material-ui/core/Button'
import QueueIcon from '@material-ui/icons/Queue'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import InputAdornment from '@material-ui/core/InputAdornment'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  taskbox: {
    width: "100%",
    [theme.breakpoints.up('sm')]: {
      width: "700px",
    }
  },
  taskinput: {
    width: "100%",
    [theme.breakpoints.up('xs')]: {
      width: "350px",
    }
  }
}))

function App() {

  const [tasks, setTasks] = useState([])
  const [newTask, setNewTask] = useState("")
  const [chosenTask, setChosenTask] = useState("")
  const [totalSecs, setTotalSecs ] = useState(0)
  const [timerRunning, setTimerRunning ] = useState(false)
  const [timerSound] = useState(new Audio('/Test_Sound.wav'))
  const [inputError, setInputError] = useState(false)

  const classes = useStyles()

  useEffect(() => {
    let interval = null
    if (timerRunning && totalSecs > 0) {
      interval = setInterval(() => {
        setTotalSecs(totalSecs => totalSecs - 1)
      }, 1000)
    } else {
      if(timerRunning)
        timerSound.play()
      clearInterval(interval)
      setTimerRunning(false)
    }
    return () => clearInterval(interval)
  }, [timerSound, timerRunning, totalSecs])

  useEffect(() => {
    loadData()
  }, [])

  const loadData = () => {
    const tasksData = localStorage.getItem('randomizerTasks')
    if(tasksData !== null)
      setTasks(JSON.parse(tasksData))
  }

  const handleChange = e => {
    setNewTask(e.target.value)
    if(inputError)
      setInputError(false)
  }

  const handleKeydown = e => {
    if(e.key === "Enter"){
      addTask()
    }
  }

  const addTask = () => {
    if(newTask.length > 0){
      const newTasksArr = [...tasks, newTask]
      setTasks(newTasksArr)
      setNewTask("")
      localStorage.setItem('randomizerTasks', JSON.stringify(newTasksArr))
    }else {
      setInputError(true)
    }

  }

  const removeTask = task => {
    const newTasksArr = tasks.filter( t => t !== task)
    setTasks(newTasksArr)
    localStorage.setItem('randomizerTasks', JSON.stringify(newTasksArr))
  }

  const randomTask = () => {
    if(tasks.length > 0){
      setChosenTask(tasks[Math.floor(Math.random() * Math.floor(tasks.length))])
      setTimerRunning(true)
      setTotalSecs(5)
      //setTotalSecs(Math.floor(Math.random() * (3601 - 600) + 600))
    }else {
      alert("Please enter a task first!")
    }

  }



  return (
    <Box className="App" display="flex" bgcolor="primary.main" height="100vh" justifyContent="center">
      <Box bgcolor="secondary.light" className={classes.taskbox}>
      <Box p={1} display="flex" justifyContent="center" bgcolor="primary.dark" color="white"><Typography variant="h5">I Can't Decide</Typography></Box>
      <Box my={4} ml={2}>
        <TextField 
        className={classes.taskinput}
        error={inputError}
        helperText={inputError ? 'Empty field!' : ' '}
        id="outlined-basic" 
        label="Task" 
        variant="outlined"
        style = {{maxWidth: 500}}
        onChange={handleChange} 
        onKeyDown={handleKeydown} 
        value={newTask}
        InputProps={{
          endAdornment: (
            <InputAdornment position='end'>
              <IconButton 
              onClick={addTask}>
              <QueueIcon/>
              </IconButton>
            </InputAdornment>
          ),
        }}
        />
      </Box>
      <Box
      ml={1}
      my={4}
      display="flex"
      flexWrap="wrap"
      css={{ width: "inherit" }}
      >
        {tasks.map((task, index) => <Task task={task} removeTask={removeTask} key={index}></Task>)}
      </Box>
      <Box display="flex" justifyContent="center">
        <Button variant="contained" color="primary" onClick={randomTask}>Get Random Task</Button>
      </Box>
        <Box 
        borderRadius={16}
        bgcolor="primary.light"
        border={4} 
        borderColor="white" 
        my={4} 
        mx={6}
        display="flex"
        alignItems="center" 
        justifyContent="center" 
        style = {{minHeight: 70, fontSize: "1.3em", fontWeight: "bolder"}}>
          {chosenTask}
        </Box>
        <Box display="flex" justifyContent="center" style = {{fontSize: "1.5em"}}>
          {(Math.floor(totalSecs/60)) > 9 ? (Math.floor(totalSecs/60)) : `0${(Math.floor(totalSecs/60))}`}:{(totalSecs % 60) > 9 ? (totalSecs % 60) : `0${(totalSecs % 60)}`}
        </Box>
      
      </Box>
    </Box>
  )
}

export default App
