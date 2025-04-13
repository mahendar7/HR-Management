import { useReducer } from 'react';
import { Avatar, Box, Stack } from '@mui/material';
import { MenuOutlined, SearchOutlined } from '@mui/icons-material';

import Sidebar from '@src/layout/Sidebar';
import CustomIconButton from '@src/components/CustomIconButton';
import { commonReducer } from '@src/utils';

const initialState = {
    open: false,
};

function MobileHeader() {
    const [state, setState] = useReducer(commonReducer, initialState);

    const { open } = state;

    const toggleSidebar = () => {
        setState({ open: !open });
    };

    return (
        <Stack direction='row' justifyContent='space-between' alignItems='center' sx={{ py: 0, px: 2, borderRadius: 'inherit' }} spacing={2}>
            <Stack direction='row' alignItems='center'>
                <Avatar sx={{ bgcolor: '#4A90E2', color: 'white', width: 30, height: 30, margin: 2, borderRadius: 1 }}>B</Avatar>
                <Box sx={{ fontWeight: 'bold', fontSize: 20 }}>BordUp™</Box>
            </Stack>

            <Stack direction='row' spacing={1}>
                <CustomIconButton>
                    <SearchOutlined fontSize='small' />
                </CustomIconButton>
                <CustomIconButton onClick={toggleSidebar}>
                    <MenuOutlined fontSize='small' />
                </CustomIconButton>
            </Stack>

            {open && (
                <Box sx={{ position: 'fixed', left: -20, top: 0, zIndex: 1, backgroundColor: '#fff' }}>
                    <Sidebar showToggle={false} />
                </Box>
            )}
        </Stack>
    );
}

export default MobileHeader;
