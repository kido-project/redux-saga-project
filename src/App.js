import { Component } from 'react';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import Fingerprint from '@mui/icons-material/Fingerprint';
class App extends Component {
  render () {
    return (
      <Stack direction="row" spacing={1}>
      <IconButton aria-label="fingerprint" color="primary">
        <Fingerprint />
      </IconButton>
      <IconButton aria-label="fingerprint" color="success">
        <Fingerprint />
      </IconButton>
    </Stack>
    )
  }
}

export default App;
