import { Route, BrowserRouter, Routes, useLocation } from 'react-router-dom';
import './App.css';
import { CircularProgress, CssBaseline, Stack, ThemeProvider, useMediaQuery } from '@mui/material';
import theme from './theme';

import Sidebar from '@src/layout/Sidebar';
import TopBar from '@src/layout/Topbar';
import Dashboard from '@src/screens/Dashboard';
import { lazy, Suspense } from 'react';
import MobileHeader from './layout/MobileHeader';
const Employee = lazy(() => import('@src/screens/Employee'));

function Routing() {
    const { pathname } = useLocation();
    const isLaptop = useMediaQuery('(min-width: 1024px)');

    const isDashboard = pathname !== '/';

    return (
        <Stack direction='row' sx={{ height: '100%', width: '100%', bgcolor: '#fff' }}>
            <CssBaseline />

            {isLaptop && <Sidebar />}

            <Stack component='main' sx={{ flexGrow: 1, height: '100%', overflow: isDashboard ? 'auto' : 'hidden' }}>
                {!isLaptop && <MobileHeader />}
                {isDashboard && <TopBar />}
                <Suspense
                    fallback={
                        <Stack alignItems='center' justifyContent='center' sx={{ height: '100%' }}>
                            <CircularProgress />
                        </Stack>
                    }>
                    <Routes>
                        <Route path='/' element={<Dashboard />} />
                        <Route path='/employee' element={<Employee />} />
                    </Routes>
                </Suspense>
            </Stack>
        </Stack>
    );
}

function App() {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Routing />
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;

{
    /*
                        <Route path='/recruitment' element={<Recruitment />} />
                        <Route path='/payroll' element={<Payroll />} />
                        <Route path='/schedule' element={<Schedule />} />
                        <Route path='/department/business-and-marketing' element={<BusinessMarketing />} />
                        <Route path='/department/design' element={<Design />} />
                        <Route path='/department/project-manager' element={<ProjectManager />} />
                        <Route path='/department/human-resource' element={<HumanResource />} />
                        <Route path='/department/development' element={<Development />} />
                        <Route path='/setting' element={<Settings />} />
                        <Route path='/help-center' element={<HelpCenter />} /> */
}
