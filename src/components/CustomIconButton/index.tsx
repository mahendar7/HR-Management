import { IconButton } from '@mui/material';

function CustomIconButton({ children, ...props }) {
    return (
        <IconButton size='small' sx={{ border: 1, borderColor: 'divider', borderRadius: '5px' }} {...props}>
            {children}
        </IconButton>
    );
}

export default CustomIconButton;
