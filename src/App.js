import { Component } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import TaskBoard from './containers/TaskBoard';
import theme from './commons/Theme/index';

class App extends Component {
  render () {
    return (
      <ThemeProvider theme={theme}>
        <TaskBoard />
      </ThemeProvider>
    )
  }
}

export default App;
