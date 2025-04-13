import { useState } from 'react';
import { Box, Typography, Avatar, Stack, Collapse, Chip } from '@mui/material';
import { Phone, AccessTime, ExpandMore, MoreVert, Square } from '@mui/icons-material';
import { getAvatarPath } from '@src/utils';
import CustomIconButton from '@src/components/CustomIconButton';
import { getDepartmentColor } from '../../utils';

export const ProfileCard = ({ profile }) => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <Box
            sx={{
                width: '100%',
                padding: '16px',
                borderRadius: '8px',
                backgroundColor: 'background.paper',
                boxShadow: 'none',
                border: '1px solid #e0e0e0',
                marginBottom: '16px',
            }}>
            {/* Avatar and Name */}
            <Stack direction='row' spacing={2} justifyContent='space-between' alignItems='center' marginBottom={2}>
                <ProfileInfo avatar={profile.avatar} name={profile.name} email={profile.email} />
                <Stack direction='row' alignItems='center' spacing={1}>
                    <CustomIconButton onClick={handleClick}>
                        <ExpandMore fontSize='small' />
                    </CustomIconButton>
                    <CustomIconButton onClick={handleClick}>
                        <MoreVert fontSize='small' />
                    </CustomIconButton>
                </Stack>
            </Stack>

            {/* Contact Info */}
            <Stack direction='row' spacing={2}>
                <Stack direction='row' spacing={1} alignItems='center'>
                    <Phone fontSize='small' />
                    <Typography variant='body2' color='text.secondary'>
                        {profile.phone}
                    </Typography>
                </Stack>
                <Stack direction='row' spacing={1} alignItems='center'>
                    <AccessTime fontSize='small' />
                    <Typography variant='body2' color='text.secondary'>
                        {profile.attendance}
                    </Typography>
                </Stack>
            </Stack>

            {/* Collapsible Section for Department and Contract Type */}
            <Collapse in={open}>
                <Stack spacing={2} marginTop={2}>
                    <Stack direction='row' justifyContent='space-between' marginTop={2} maxWidth={300}>
                        <Stack spacing={1}>
                            <Typography variant='body2' color='text.secondary'>
                                Department
                            </Typography>
                            <DepartmentChip department={profile.department} />
                        </Stack>
                        <Stack spacing={1}>
                            <Typography variant='body2' color='text.secondary'>
                                Job Title
                            </Typography>
                            <Typography sx={{ fontWeight: 600, color: 'text.secondary', fontSize: 14 }}>{profile.jobTitle}</Typography>
                        </Stack>
                    </Stack>
                    <Stack spacing={1}>
                        <Typography variant='body2' color='text.secondary'>
                            Contract
                        </Typography>
                        <Typography sx={{ fontWeight: 'bold', color: 'text.secondary', fontSize: 14 }}>{profile.contractType}</Typography>
                    </Stack>
                </Stack>
            </Collapse>
        </Box>
    );
};

export function ProfileInfo({ avatar, name, email }) {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Avatar src={getAvatarPath(avatar)} sx={{ mr: 1.5 }} />
            <Box>
                <Typography sx={{ fontSize: 14, fontWeight: 'bold' }}>{name}</Typography>
                <Typography color='text.secondary' sx={{ fontSize: 12 }}>
                    {email}
                </Typography>
            </Box>
        </Box>
    );
}

export function DepartmentChip({ department }) {
    return <Chip label={department} color={getDepartmentColor(department)} icon={<Square sx={{ fontSize: 8, borderRadius: 10, '& path': { fill: `inherit` } }} />} />;
}
