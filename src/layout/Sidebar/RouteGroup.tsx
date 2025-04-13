import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Box, List, ListItemButton, ListItemIcon, ListItemText, ListSubheader } from '@mui/material';
import { RouteGroup as RouteGroupInterface } from './routes';

interface RouteGroupProps {
    label: string;
    child: RouteGroupInterface['children'];
    open: boolean;
}

const RouteGroup: React.FC<RouteGroupProps> = ({ label, child, open }) => {
    const navigate = useNavigate();
    const { pathname } = useLocation();

    return (
        <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', borderRadius: 'inherit' }}
            component='nav'
            aria-labelledby={label}
            subheader={
                <ListSubheader
                    component='div'
                    id={label}
                    sx={{
                        textTransform: 'uppercase',
                        height: 40,
                        color: 'text.disabled',
                        fontSize: open ? 14 : 6,

                        ...(!open && {
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',

                            fontSize: 7,
                            color: 'text.secondary',
                            pr: 0,
                            pl: 0.5,
                            fontWeight: 'bold',
                        }),
                    }}>
                    {label}
                </ListSubheader>
            }>
            {child.map(route => (
                <ListItemButton
                    disableRipple
                    key={route.path}
                    sx={{
                        py: 0.8,
                        color: 'text.primary',
                        border: 1,
                        borderColor: 'transparent',
                        ...(route.path === pathname && { bgcolor: '#EFEFFD', borderRadius: 1, color: 'custom.purple', borderColor: 'custom.purple' }),
                    }}
                    onClick={() => navigate(route.path)}>
                    <ListItemIcon sx={{ minWidth: 40, color: 'inherit' }}>
                        {route.color ? <Box sx={{ width: 20, borderRadius: '5px', height: 20, backgroundColor: route.color }} /> : route.icon}
                    </ListItemIcon>
                    {open && (
                        <ListItemText
                            primary={route.label}
                            slotProps={{
                                primary: { fontSize: 14 },
                            }}
                        />
                    )}
                </ListItemButton>
            ))}
        </List>
    );
};

export default RouteGroup;
