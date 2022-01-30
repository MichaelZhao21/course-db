import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import Login from './components/Login';
import Course from './components/Course';
import AddCourse from './components/AddCourse';
import AddTodo from './components/AddTodo';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import AdapterDayjs from '@mui/lab/AdapterDayjs';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#F99B9B',
            light: '#FCCACA',
            dark: '#F56A6A',
        },
        secondary: {
            main: '#B870DA',
            light: '#CD9AE5',
            dark: '#A549D0',
        },
        background: {
            default: '#2B2A2C',
            paper: '#2B2A2C',
        },
    },
    typography: {
        h2: {
            fontFamily: 'Open Sans',
            fontWeight: 300,
            fontSize: '70px',
        },
        h4: {
            fontFamily: 'hind',
        },
    },
});

function App() {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <BrowserRouter>
                    <Routes>
                        <Route exact path="/login" element={<Login />} />
                        <Route exact path="/course/:id" element={<Course />} />
                        <Route exact path="/add/courses" element={<AddCourse />} />
                        <Route exact path="/add/todos" element={<AddTodo />} />
                        <Route exact path="/" element={<Home />} />
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </LocalizationProvider>
    );
}

export default App;
