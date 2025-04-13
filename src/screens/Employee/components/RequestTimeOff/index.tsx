import { Button, Chip, Stack } from '@mui/material';
import { Square } from '@mui/icons-material';

import CustomTable, { ColumnDef } from '@src/components/CustomTable';
import { LeaveRequest } from '@src/types/employee';

import { leaveData } from './data';
import { ProfileInfo, ProfileCard } from '../Profile';
import { formatTimestamp } from '@src/utils';

function RequestTimeOff() {
    const columns: ColumnDef<LeaveRequest>[] = [
        {
            field: 'name',
            headerName: 'Employee Name',
            render: (row: LeaveRequest) => <ProfileInfo avatar={row.avatar} name={row.name} email={row.email} />,
            filterable: true,
        },
        {
            field: 'leaveType',
            headerName: 'Leave Type',
            filterable: true,
            render: (row: LeaveRequest) => {
                const { leaveType } = row;
                const color = leaveType === 'Sick Leave' ? 'success' : 'default';

                return <Chip label={leaveType} color={color} icon={<Square sx={{ fontSize: 8, borderRadius: 10, '& path': { fill: `inherit` } }} />} />;
            },
        },
        { field: 'leaveFrom', headerName: 'Leave From', filterable: false, render: row => formatTimestamp(row.leaveFrom) },
        { field: 'leaveTo', headerName: 'Leave To', filterable: false, render: row => formatTimestamp(row.leaveTo) },
        { field: 'leaveTo', headerName: 'Leave To', filterable: false },
        {
            field: 'status',
            headerName: 'Status',
            render: (row: LeaveRequest) => {
                const { status } = row;
                const color = status === 'Pending' ? 'error' : 'success';

                return <Chip label={status} color={color} />;
            },
            filterable: true,
        },
        {
            field: 'actions',
            headerName: '',
            render: (row: LeaveRequest) => (
                <Stack direction='row' spacing={1} justifyContent='flex-end' sx={{ width: '100%', maxWidth: 300 }}>
                    {row.status !== 'Approved' && (
                        <Stack direction='row' spacing={1}>
                            <Button variant='outlined' size='small' color='success'>
                                Approve
                            </Button>
                            <Button variant='outlined' size='small' color='error'>
                                Reject
                            </Button>
                        </Stack>
                    )}
                    <Button variant='outlined' size='small' sx={{ mr: 1, borderColor: '#e0e0e0', color: 'text.primary', justifySelf: 'flex-end' }}>
                        Edit
                    </Button>
                </Stack>
            ),
        },
    ];

    const renderCard = row => {
        return <ProfileCard profile={row} />;
    };

    return <CustomTable title='Request Time Off' columns={columns} data={leaveData} renderCard={renderCard} />;
}

export default RequestTimeOff;
