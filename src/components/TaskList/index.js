import { withStyles } from "@mui/styles";
import React, { Component } from "react";
import { Box } from '@mui/system';
import Grid from '@mui/material/Grid';

import styles from './styles';
import TaskItem from "../TaskItem";
class TaskList extends Component {
  render () {
    const {classes, tasks, status} = this.props;
    return (
      <Grid item md={4} xs={12}>
      <Box mt={1} mb={1}>
        <div className={classes.status}>
          {status.label}
        </div>
      </Box>
      <div className={classes.wrapperListTask}>
        {
          tasks.map((task, index) => {
            // return <h1 key={index}>{task.title}</h1>;
            return (
              <TaskItem key={task.id} task={task} status={status} index={index}/>
            )
          })
        }
      </div>
    </Grid>
    );
  }
}

export default withStyles(styles)(TaskList);