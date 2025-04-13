import { DashboardOutlined, GroupOutlined, PersonAddAltOutlined, MonetizationOnOutlined, DateRangeOutlined, SettingsOutlined, LiveHelpOutlined } from '@mui/icons-material';

interface Route {
    isRoute: boolean;
    path: string;
    label: string;
    icon?: React.ReactNode;
    color?: string;
}

export interface RouteGroup {
    label: string;
    children: Route[];
}

const colors = {
    blue1: '#3C41E9',
    green: '#12A779',
    orange: '#FFA40A',
    purple: '#913AF6',
    blue2: '#427DDC',
};

const routes: RouteGroup[] = [
    {
        label: 'Main Menu',
        children: [
            { isRoute: true, path: '/', label: 'Dashboard', icon: <DashboardOutlined /> },
            { isRoute: true, path: '/employee', label: 'Employee', icon: <GroupOutlined /> },
            { isRoute: true, path: '/recruitment', label: 'Recruitment', icon: <PersonAddAltOutlined /> },
            { isRoute: true, path: '/payroll', label: 'Payroll', icon: <MonetizationOnOutlined /> },
            { isRoute: true, path: '/schedule', label: 'Schedule', icon: <DateRangeOutlined /> },
        ],
    },
    {
        label: 'Department',
        children: [
            { isRoute: true, path: '/department/business-and-marketing', label: 'Business and Marketing', color: colors.blue1 },
            { isRoute: true, path: '/department/design', label: 'Design', color: colors.green },
            { isRoute: true, path: '/department/project-manager', label: 'Project Manager', color: colors.orange },
            { isRoute: true, path: '/department/human-resource', label: 'Human Resource', color: colors.orange },
            { isRoute: true, path: '/department/development', label: 'Development', color: colors.orange },
        ],
    },
    {
        label: 'Other',
        children: [
            { isRoute: true, path: '/Setting', label: 'Setting', icon: <SettingsOutlined /> },
            { isRoute: true, path: '/help-center', label: 'Help Center', icon: <LiveHelpOutlined /> },
        ],
    },
];

const mainRoutes = routes.slice(0, 2);
const otherRoutes = routes.slice(2);

export { mainRoutes, otherRoutes };
