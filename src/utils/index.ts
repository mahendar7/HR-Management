export function commonReducer(prevState: object, newState: object) {
    return { ...prevState, ...newState };
}

export function generateEmployeeDataCopies(data: Array<object>, totalCopies: number) {
    const allCopies = [];

    for (let i = 0; i < totalCopies; i++) {
        const randomNum = Math.floor(Math.random() * data.length - 1) + 1;
        const newEmployee = { ...data[randomNum] };
        newEmployee.id = data.length + allCopies.length + 1;
        allCopies.push(newEmployee);
    }

    return allCopies;
}

export function debounce<T extends (...args: any[]) => void>(func: T, delay: number) {
    let timeoutId: NodeJS.Timeout;

    return (...args: any[]) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func(...args);
        }, delay);
    };
}

export const getAvatarPath = (avatar: string) => `/src/assets/images/avatars/${avatar}.jpg`;

export function formatTimestamp(timestamp: number) {
    const date = new Date(timestamp * 1000);

    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}
