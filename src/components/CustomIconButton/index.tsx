import { IconButton, IconButtonProps } from '@mui/material';
import { ReactNode } from 'react';

interface CustomIconButtonProps extends IconButtonProps {
    children: ReactNode;
}

function CustomIconButton({ children, ...props }: CustomIconButtonProps) {
    return (
        <IconButton size='small' sx={{ border: 1, borderColor: 'divider', borderRadius: '5px' }} {...props}>
            {children}
        </IconButton>
    );
}

export default CustomIconButton;
