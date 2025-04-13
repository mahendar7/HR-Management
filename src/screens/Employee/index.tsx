import { useState, SyntheticEvent } from 'react';
import { Box, Typography, Button, Avatar, Tabs, Tab, Stack } from '@mui/material';
import { Add, CloudDownloadOutlined, GroupOutlined, EditOutlined, PersonRemoveOutlined } from '@mui/icons-material';

import ManageEmployees from './components/ManageEmployees';
import RequestTimeOff from './components/RequestTimeOff';

const tabs = [
    {
        label: 'Manage Employees',
        icon: <EditOutlined fontSize='small' />,
    },
    {
        label: 'Request Time Off',
        icon: <PersonRemoveOutlined fontSize='small' />,
    },
];

export default function Employee() {
    const [tabValue, setTabValue] = useState(0);

    const handleTabChange = (_event: SyntheticEvent, newValue: number) => {
        setTabValue(newValue);
    };

    return (
        <>
            {/* Header */}
            <Stack
                sx={{ justifyContent: 'space-between', bgcolor: '#F3F5F7', py: 2, pl: { xs: 2, md: 4 }, pr: 2, borderTop: 1, borderBottom: 1, borderColor: 'divider' }}
                spacing={2}>
                <Stack flexDirection='row' justifyContent='space-between'>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Avatar sx={{ bgcolor: '#fff', color: '#5962e2', borderRadius: '5px', mr: 2, display: { xs: 'none', sm: 'flex' } }}>
                            <GroupOutlined />
                        </Avatar>
                        <Box>
                            <Typography variant='h6' sx={{ fontWeight: 'bold' }}>
                                Employee
                            </Typography>
                            <Typography variant='body2' color='text.disabled'>
                                Manage your employee
                            </Typography>
                        </Box>
                    </Box>
                    <Stack direction='row' alignItems='center' spacing={2}>
                        <Button variant='outlined' startIcon={<CloudDownloadOutlined />}>
                            Export
                        </Button>
                        <Button variant='contained' color='primary' startIcon={<Add />} sx={{ display: { xs: 'none', sm: 'flex' } }}>
                            Add Employee
                        </Button>
                    </Stack>
                </Stack>
                <Button variant='contained' color='primary' startIcon={<Add />} sx={{ display: { sm: 'none' } }}>
                    Add Employee
                </Button>
            </Stack>

            {/* Navigation Tabs */}
            <Box sx={{ borderBottom: 1, borderColor: 'divider', pl: { xs: 2, md: 4 } }}>
                <Tabs
                    value={tabValue}
                    onChange={handleTabChange}
                    aria-label='employee management tabs'
                    sx={{
                        height: 50,
                        fontWeight: 'bold',
                        '& .MuiTab-root.Mui-selected': { color: '#5962e2', fontWeight: 'bold' },
                        '& .MuiTabs-indicator': { backgroundColor: '#5962e2' },
                        '& .MuiTab-root': { textTransform: 'none', minHeight: 50 },
                    }}>
                    {tabs.map(tab => (
                        <Tab key={tab.label} icon={tab.icon} iconPosition='start' label={tab.label} />
                    ))}
                </Tabs>
            </Box>

            {/* Employee List Container */}
            <Box sx={{ pl: { xs: 2, md: 4 }, mb: 2, pr: 2, height: '100%', overflow: 'auto' }}>
                {tabValue === 0 && <ManageEmployees />}
                {tabValue === 1 && <RequestTimeOff />}
            </Box>
        </>
    );
}
