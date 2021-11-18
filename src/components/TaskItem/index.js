import { withStyles } from '@mui/styles';
import React, { Component } from "react";
import { Card, CardActions, CardContent, Fab, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Icon } from '@mui/material';
import styles from './styles';

class TaskItem extends Component {
  render () {
    const {classes, task, status} = this.props;
    return (
      <Card className={classes.card}>
        <CardContent>
          <Grid container justify="space-between">
            <Grid item md={8}> 
              <Typography component="h2">
                {task.title}
              </Typography>
            </Grid>
            <Grid item md={4}>
              {status.label}
            </Grid>
          </Grid>
          <p>{task.description}</p>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Fab size="small" aria-label="edit" className={classes.fabEdit}>
            <Icon fontSize="large">edit_icon</Icon>
          </Fab>
          <Fab size="small" aria-label="edit" className={classes.fabDelete}>
            <Icon fontSize="large">delete_icon</Icon>
          </Fab>
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(styles)(TaskItem);