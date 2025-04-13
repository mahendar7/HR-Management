import { Employee } from '@src/types/employee';
import { LeaveRequest } from '@src/types/employee';

export function commonReducer<T>(prevState: T, newState: Partial<T>): T {
    return { ...prevState, ...newState };
}

function generateDataCopies<T extends { id: number }>(data: T[], totalCopies: number): T[] {
    const allCopies: T[] = [];

    for (let i = 0; i < totalCopies; i++) {
        const randomNum = Math.floor(Math.random() * data.length - 1) + 1;
        const newItem = { ...data[randomNum] };
        newItem.id = data.length + allCopies.length + 1;
        allCopies.push(newItem);
    }

    return allCopies;
}

export const generateEmployeeDataCopies = (data: Employee[], totalCopies: number) => generateDataCopies(data, totalCopies);
export const generateLeaveRequestCopies = (data: LeaveRequest[], totalCopies: number) => generateDataCopies(data, totalCopies);

export function debounce<T extends (...args: unknown[]) => void>(func: T, delay: number) {
    let timeoutId: NodeJS.Timeout;

    return (...args: Parameters<T>) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func(...args);
        }, delay);
    };
}

export const getAvatarPath = (avatar: string) => `src/assets/images/avatars/${avatar}.jpg`;

export function formatTimestamp(timestamp: number) {
    const date = new Date(timestamp * 1000);

    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}
