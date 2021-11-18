import { withStyles } from '@mui/styles';
import React, { Component } from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, Typography } from '@mui/material';

import styles from './styles';
class TaskForm extends Component {
  render () {
    const {classes, open, handleClose} = this.props;
    return (
      <Dialog fullWidth={true} maxWidth="sm" open={open} onClose={handleClose}>
        <DialogTitle>New Task</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Task name"
            fullWidth
            variant="outlined"
          />
          <br/>
          <br/>
          <TextField
            id="filled-multiline-flexible"
            label="Task descriptiion"
            multiline
            rows={4}
            // value={value}
            // onChange={handleChange}
            fullWidth
            mt={4}
            variant="outlined"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>OK</Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default withStyles(styles)(TaskForm);