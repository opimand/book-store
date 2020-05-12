import * as React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Sidebar from './components/Sidebar';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';

const darkTheme = {
  palette: {
    primary: {
      light: '#33ab9f',
      main: '#292929',
      dark: '#d0c9c9',
      contrastText: '#ffffff',
    },
    text: {
      primary: '#e7e3e3',
    },

    secondary: {
      light: '#383636',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#dc3434',
    },
    background: {
      default: '#292929',
    },
  },
  overrides: {
    MuiPaper: {
      root: {
        backgroundColor: '292929',
      },
    },
    MuiRating: {
      iconEmpty: {
        color: '#eacdcd',
      },
    },
    MuiInputLabel: {
      outlined: {
        color: '#eacdcd',
      },
    },
    MuiButton: {
      label: {
        color: '#978e8e',
      },
    },
    MuiIconButton: {
      label: {
        color: '#978e8e',
      },
    },
  },
};

const lightTheme = {
  palette: {
    primary: {
      light: '#9157e3',
      main: '#54318b',
      dark: '#54318b',
      contrastText: '#fff',
    },
    secondary: {
      light: '#fff',
      main: '#008785',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
};

function App() {
  const darkMode = useSelector((state) => state.app.darkMode);
  const theme = createMuiTheme(darkMode ? darkTheme : lightTheme);

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Sidebar />
    </MuiThemeProvider>
  );
}

export default App;
