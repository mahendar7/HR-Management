import React, { Fragment, useReducer } from 'react';
import { Avatar, Box, Divider, IconButton, Stack, Typography } from '@mui/material';
import { UnfoldMoreOutlined, ViewSidebarOutlined } from '@mui/icons-material';

import RouteGroup from './RouteGroup';
import { mainRoutes, otherRoutes } from './routes';
import { commonReducer } from '@src/utils';

const initialState = {
    open: true,
};

const Sidebar: React.FC = ({ showToggle = true }) => {
    const [state, setState] = useReducer(commonReducer, initialState, data => ({ ...data }));

    const { open } = state;

    const toggleSidebar = () => {
        setState({ open: !open });
    };

    return (
        <Stack
            sx={{
                height: '100%',
                width: open ? 250 : 60,
                border: 1,
                borderColor: 'divider',
                transition: 'all .3s ease',
            }}>
            <Stack sx={{ flex: 1, height: '100%', borderRadius: 'inherit' }}>
                <Stack
                    direction='row'
                    justifyContent='space-between'
                    alignItems='center'
                    sx={{ py: 0, pr: 1, borderRadius: 'inherit', borderBottom: 1, borderColor: 'divider', position: 'relative' }}
                    spacing={2}>
                    <Stack direction='row' alignItems='center'>
                        <Avatar sx={{ bgcolor: '#4A90E2', color: 'white', width: 30, height: 30, margin: 2, borderRadius: 1 }}>B</Avatar>
                        {open && <Box sx={{ fontWeight: 'bold', fontSize: 20 }}>BordUp™</Box>}
                    </Stack>

                    {showToggle && (
                        <IconButton
                            size='small'
                            sx={{
                                ...(!open && {
                                    position: 'absolute',
                                    right: -30,
                                    top: 20,
                                    borderRadius: 0,
                                    transform: 'rotate(180deg)',
                                    width: 30,
                                    height: 30,
                                    boxShadow: '0px -4px 8px rgba(14, 11, 11, 0.2)',
                                    backgroundColor: '#fff',
                                    border: 1,
                                    borderColor: 'divider',
                                }),
                            }}
                            onClick={toggleSidebar}>
                            <ViewSidebarOutlined fontSize='small' />
                        </IconButton>
                    )}
                </Stack>

                <Stack sx={{ height: '100%', overflowY: 'auto', px: open ? 2 : 0 }}>
                    {open && (
                        <Stack direction='row' sx={{ bgcolor: '#f0f0f0', border: 1, borderColor: 'divider', p: 1, py: 0.5, pl: 0, mt: 2, mb: 1 }} alignItems='center' spacing={1}>
                            <Stack direction='row' alignItems='center' sx={{ flex: 1 }}>
                                <Avatar sx={{ bgcolor: '#000', color: 'white', width: 30, height: 30, margin: 2, borderRadius: 1 }}>B</Avatar>
                                <Stack>
                                    <Typography variant='h6' sx={{ fontSize: 12, fontWeight: 'bold', color: '#333' }}>
                                        Rocks Company
                                    </Typography>
                                    <Typography variant='body2' sx={{ fontSize: 10, color: '#888' }}>
                                        Team - 20 Members
                                    </Typography>
                                </Stack>
                            </Stack>
                            <IconButton size='small'>
                                <UnfoldMoreOutlined fontSize='small' />
                            </IconButton>
                        </Stack>
                    )}

                    {mainRoutes.map((group, index) => (
                        <Fragment key={group.label}>
                            <RouteGroup label={group.label} child={group.children} open={open} />
                            {index !== mainRoutes.length - 1 && <Divider sx={{ marginTop: 2 }} />}
                        </Fragment>
                    ))}

                    <Stack sx={{ height: '100%', justifyContent: 'flex-end', borderRadius: 'inherit' }}>
                        {otherRoutes.map(group => (
                            <RouteGroup key={group.label} label={group.label} child={group.children} open={open} />
                        ))}
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    );
};

export default Sidebar;
