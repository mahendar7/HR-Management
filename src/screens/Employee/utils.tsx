export const getDepartmentColor = (department: string) =>
    department === 'Design' ? 'success' : department === 'Development' ? 'primary' : department === 'HR' ? 'secondary' : department === 'PM' ? 'warning' : 'default';
