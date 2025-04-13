import { LeaveRequest } from '@src/types/employee';
import { generateLeaveRequestCopies } from '@src/utils';

let leaveData: LeaveRequest[] = [
    {
        id: 1,
        name: 'Mitchell Chaney',
        email: 'mitchell.chaney@example.com',
        leaveType: 'Annual Leave',
        leaveFrom: new Date('2024-12-30').getTime() / 1000, // Convert to Unix timestamp
        leaveTo: new Date('2025-02-21').getTime() / 1000, // Convert to Unix timestamp
        days: 53,
        status: 'Approved',
        avatar: '1',
    },
    {
        id: 2,
        name: 'Regina Velazquez',
        email: 'regina.velazquez@example.com',
        leaveType: 'Annual Leave',
        leaveFrom: new Date('2025-03-05').getTime() / 1000,
        leaveTo: new Date('2025-03-23').getTime() / 1000,
        days: 18,
        status: 'Approved',
        avatar: '2',
    },
    {
        id: 3,
        name: 'Lisa Cohen',
        email: 'lisa.cohen@example.com',
        leaveType: 'Annual Leave',
        leaveFrom: new Date('2024-07-27').getTime() / 1000,
        leaveTo: new Date('2025-04-25').getTime() / 1000,
        days: 272,
        status: 'Pending',
        avatar: '3',
    },
    {
        id: 4,
        name: 'Sabrina Castillo',
        email: 'sabrina.castillo@example.com',
        leaveType: 'Sick Leave',
        leaveFrom: new Date('2024-05-24').getTime() / 1000,
        leaveTo: new Date('2024-07-05').getTime() / 1000,
        days: 42,
        status: 'Pending',
        avatar: '4',
    },
    {
        id: 5,
        name: 'Bethany Delgado',
        email: 'bethany.delgado@example.com',
        leaveType: 'Sick Leave',
        leaveFrom: new Date('2024-10-21').getTime() / 1000,
        leaveTo: new Date('2024-11-14').getTime() / 1000,
        days: 24,
        status: 'Pending',
        avatar: '5',
    },
];

leaveData = [...leaveData, ...generateLeaveRequestCopies(leaveData, 100)];

export { leaveData };
