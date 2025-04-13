import { generateEmployeeDataCopies } from '@src/utils';

let employeeData = [
    {
        id: 1,
        name: 'Brooklyn Simmons',
        email: 'brook_sim@gmail.com',
        phone: '(+62) 928 7273 7262',
        department: 'Design',
        jobTitle: 'Creative Director',
        contractType: 'Onsite - Fulltime',
        attendance: '120h 32m',
        avatar: '1',
    },
    {
        id: 2,
        name: 'Cody Fisher',
        email: 'cody_fisher09@gmail.com',
        phone: '(+62) 928 7273 7262',
        department: 'Development',
        jobTitle: 'Head of Development',
        contractType: 'Onsite - Fulltime',
        attendance: '120h 32m',
        avatar: '2',
    },
    {
        id: 3,
        name: 'Ralph Edwards',
        email: 'ralp_we@gmail.com',
        phone: '(+62) 928 7273 7262',
        department: 'Design',
        jobTitle: 'Sr. UX Designer',
        contractType: 'Onsite - Fulltime',
        attendance: '120h 32m',
        avatar: '3',
    },
    {
        id: 4,
        name: 'Bessie Cooper',
        email: 'bess_coo@gmail.com',
        phone: '(+62) 928 7273 7262',
        department: 'HR',
        jobTitle: 'Sr. HR',
        contractType: 'Onsite - Fulltime',
        attendance: '120h 32m',
        avatar: '4',
    },
    {
        id: 5,
        name: 'Leslie Alexander',
        email: 'alexander_he@gmail.com',
        phone: '(+62) 928 7273 7262',
        department: 'PM',
        jobTitle: 'Head of PM',
        contractType: 'Onsite - Fulltime',
        attendance: '120h 32m',
        avatar: '5',
    },
    {
        id: 6,
        name: 'Marienne Jobe',
        email: 'hai-color71@gmail.com',
        phone: '(+62) 928 7273 7262',
        department: 'PM',
        jobTitle: 'Sr. Project Manager',
        contractType: 'Onsite - Fulltime',
        attendance: '120h 32m',
        avatar: '6',
    },
];

employeeData = [...employeeData, ...generateEmployeeDataCopies(employeeData, 100)];

export { employeeData };
