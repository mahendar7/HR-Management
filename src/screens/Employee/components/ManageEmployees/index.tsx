import { Box, Button, IconButton } from '@mui/material';
import { MoreVert } from '@mui/icons-material';

import CustomTable, { ColumnDef } from '@src/components/CustomTable';
import { Employee } from '@src/types/employee';

import { employeeData } from './data';
import { ProfileInfo, ProfileCard, DepartmentChip } from '../Profile';

function ManageEmployees() {
    const columns: ColumnDef<Employee>[] = [
        {
            field: 'name',
            headerName: 'Employee Name',
            render: (row: Employee) => <ProfileInfo avatar={row.avatar} name={row.name} email={row.email} />,
            filterable: true,
        },
        { field: 'phone', headerName: 'Phone Number', filterable: true },
        {
            field: 'department',
            headerName: 'Department',
            render: (row: Employee) => <DepartmentChip department={row.department} />,
            filterable: true,
        },
        { field: 'jobTitle', headerName: 'Job Title', filterable: true },
        { field: 'contractType', headerName: 'Contract Type', filterable: true },
        { field: 'attendance', headerName: 'Attendance', filterable: true },
        {
            field: 'actions',
            headerName: 'Actions',
            render: () => (
                <Box sx={{ display: 'flex' }}>
                    <Button variant='outlined' size='small' sx={{ mr: 1, borderColor: '#e0e0e0', color: 'text.primary' }}>
                        See Details
                    </Button>
                    <IconButton size='small' sx={{ border: '1px solid #e0e0e0' }}>
                        <MoreVert fontSize='small' />
                    </IconButton>
                </Box>
            ),
        },
    ];

    const renderCard = (row: Employee) => {
        return <ProfileCard profile={row} />;
    };

    return <CustomTable title='Manage Employees' columns={columns} data={employeeData} renderCard={renderCard} />;
}

export default ManageEmployees;
