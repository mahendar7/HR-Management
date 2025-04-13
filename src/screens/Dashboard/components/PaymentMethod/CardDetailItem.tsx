import { Typography, Stack, Divider } from '@mui/material';

interface CardDetailItemProps {
    label: string;
    value: string;
}

const CardDetailItem: React.FC<CardDetailItemProps> = ({ label, value }) => {
    return (
        <>
            <Stack justifyContent='space-between'>
                <Typography variant='body1' color='text.secondary'>
                    {label}
                </Typography>
                <Typography variant='body1' sx={{ fontWeight: 'bold' }}>
                    {value}
                </Typography>
            </Stack>
            <Divider />
        </>
    );
};

export default CardDetailItem;
