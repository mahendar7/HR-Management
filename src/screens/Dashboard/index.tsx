import { Grid } from '@mui/material';

import PaymentMethod from './components/PaymentMethod';

function Dashboard() {
    return (
        <Grid container sx={{ p: 4, bgcolor: '#f5f5f5', height: '100%' }}>
            <Grid size={{ xs: 12 }}>
                <PaymentMethod />
            </Grid>
        </Grid>
    );
}

export default Dashboard;
