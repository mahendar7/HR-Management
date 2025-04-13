import React from 'react';
import { TextField, Stack, Box, InputAdornment, Typography } from '@mui/material';
import { NotificationsOutlined, ShareOutlined, KeyboardCommandKeyOutlined, SearchOutlined } from '@mui/icons-material';
import CustomIconButton from '@src/components/CustomIconButton';

const TopBar: React.FC = () => {
    return (
        <Stack direction='row' justifyContent='space-between' alignItems='center' sx={{ py: 2, pl: 4, pr: 2, bgcolor: 'white', display: { xs: 'none', md: 'flex' } }}>
            <Box>
                <TextField
                    variant='outlined'
                    size='small'
                    placeholder='Search keyword...'
                    slotProps={{
                        input: {
                            startAdornment: (
                                <InputAdornment position='start'>
                                    <SearchOutlined />
                                </InputAdornment>
                            ),
                            endAdornment: (
                                <InputAdornment position='end' sx={{ border: 1, borderColor: 'divider', px: 1, borderRadius: 1 }}>
                                    <KeyboardCommandKeyOutlined fontSize='small' sx={{ mr: 0.5 }} />
                                    <Typography>+ K</Typography>
                                </InputAdornment>
                            ),
                        },
                    }}
                />
            </Box>
            <Stack direction='row' alignItems='center' spacing={2}>
                <CustomIconButton>
                    <NotificationsOutlined fontSize='small' />
                </CustomIconButton>
                <CustomIconButton>
                    <ShareOutlined fontSize='small' />
                </CustomIconButton>
            </Stack>
        </Stack>
    );
};

export default TopBar;
