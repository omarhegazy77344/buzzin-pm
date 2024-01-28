import IDicon from '../../assets/Icons/IDicon';
import Addicon from '../../assets/Icons/Addicon';
import Logicon from '../../assets/Icons/Logicon';
import Pendingicon from '../../assets/Icons/Pendingicon';
import Settingcon from '../../assets/Icons/Settingicon';
import Dashboard from '../../assets/Icons/Dashboard';
export const mainNavitems=[
    {
        id: 0,
        icon: <Dashboard />,
        label: 'Dashboard',
        route: 'Dashboard',
    },
    {
        id: 1,
        icon: <IDicon />,
        label: 'Passes',
        route: 'passes',
    },
    {
        id: 2,
        icon: <Addicon />,
        label: 'Creat Pass',
        route: 'Create',
    },
    {
        id: 3,
        icon: <Logicon />,
        label: 'Pending Authorization',
        route: 'Pending',
    },
    {
        id: 4,
        icon: <Pendingicon />,
        label: 'Logs',
        route: 'Logs',
    },
    {
        id: 5,
        icon: <Settingcon />,
        label: 'Settings',
        route: 'Settings',
    },
    ]