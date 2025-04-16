import { Typography, Button, Stack, Box, Divider } from '@mui/material';
import { Info } from '@mui/icons-material';
import CardDetailItem from './CardDetailItem';

function PaymentMethod() {
    return (
        <Box sx={{ border: 1, borderColor: 'divider', borderRadius: '8px', p: 3 }}>
            {/* Header */}
            <Stack direction='row' justifyContent='space-between' alignItems='center' sx={{ mb: 1 }}>
                <Stack direction='row' alignItems='center' spacing={1}>
                    <Typography sx={{ color: 'text.secondary', fontWeight: 'bold' }}>Payment Method</Typography>
                    <Info fontSize='small' sx={{ fontSize: 12, '& path': { fill: '#9CA5B2' } }} />
                </Stack>
                <Button variant='outlined' color='secondary' sx={{ borderColor: 'divider' }}>
                    Change Payment Method
                </Button>
            </Stack>

            <Stack direction='row' spacing={2}>
                <CardDetailItem label='Cardholder Name' value='Rocks Company Ltd' />
                <CardDetailItem label='Account Number' value='**** **** **** 6273' />
                <CardDetailItem label='Expiration' value='12/28' />
                <Divider />

                {/* Payment Method */}
                <Stack justifyContent='space-between'>
                    <Typography variant='body1' color='text.secondary'>
                        Payment Method
                    </Typography>
                    <Stack direction='row' spacing={1} alignItems='center'>
                        <img src='/images/payments/visa.png' alt='Visa' width={30} />
                        <Typography variant='body1' sx={{ fontWeight: 'bold' }}>
                            Debit Card
                        </Typography>
                        <Typography sx={{ verticalAlign: 'center' }}>.</Typography>
                        <Typography sx={{ fontWeight: 'bold', fontSize: 12 }}>Visa</Typography>
                    </Stack>
                </Stack>
            </Stack>
        </Box>
    );
}

export default PaymentMethod;
