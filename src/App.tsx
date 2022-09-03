// import { MuiTypography } from './Components/Mui-typography';
import './App.css';
// import MuiButtons from './Components/MuiButtons';
import { createTheme, ThemeProvider } from '@mui/material';
import Hero from './Components/Pages/Home Page/Hero';

const theme = createTheme({
  palette: {
    primary: {
      main: '#293D45',
      light: '#53636a',
      dark: '#1c2a30',
    },
    secondary: {
      main: '#A67744',
    },
  },
  typography: {
    fontFamily: 'SegoeUI, Segoe UI',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        {/* <MuiTypography /> */}
        {/* <MuiButtons /> */}
        <Hero />
      </div>
    </ThemeProvider>
  );
}

export default App;
