import { withStyles } from '@mui/styles';
import React, { Component } from 'react';
import styles from './styles';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Grid from '@mui/material/Grid';
import { STATUSES } from '../../constants';

import TaskList from '../../components/TaskList';
import TaskForm from '../../components/TaskForm';
const listTask = [
    {
        id: 1,
        title: "Design DB",
        description: "Design Database",
        status: 0
    },
    {
        id: 2,
        title: "Design API",
        description: "Design API",
        status: 2
    },
    {
        id: 3,
        title: "Make Unit Test",
        description: "Make Unit Test",
        status: 1
    },
]
class TaskBoard extends Component {
    constructor(props) {
      super(props);
      this.state = {
        open: false
      }
    }

    renderBoard() {
      let xhtml = null;
      xhtml = (
        <Grid container spacing={2}>
          {
            STATUSES.map((status, index) => {
              const tasks = listTask.filter(task => task.status === status.value)
              return (
                <TaskList key={index} tasks={tasks} status={status}/>
              )
            })
          }
        </Grid>
      )
      return xhtml;
    }

    renderDialog() {
      const {open} = this.state;
      return (
        <TaskForm open={open} handleClose={this.handleClose}/>
      );
    }

    handleClose = () => {
      this.setState({
        open: false
      })
    }

    openForm = () => {
      this.setState({
        open: true
      })
    }

    render() {
      const { classes } = this.props;
      return (
        <div className={classes.taskBoard}>
          <Button variant="contained" startIcon={<AddIcon/>} onClick={this.openForm}>
            Add new task
          </Button>
          {this.renderBoard()}
          {this.renderDialog()}
        </div>
      )
    }
}

export default withStyles(styles)(TaskBoard);
