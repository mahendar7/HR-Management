export interface Employee {
    id: number;
    name: string;
    email: string;
    phone: string;
    department: string;
    jobTitle: string;
    contractType: string;
    attendance: string;
    avatar: string;
}

export interface LeaveRequest {
    id: number;
    name: string;
    email: string;
    leaveType: string;
    leaveFrom: number;
    leaveTo: number;
    days: number;
    status: string;
    avatar: string;
}
