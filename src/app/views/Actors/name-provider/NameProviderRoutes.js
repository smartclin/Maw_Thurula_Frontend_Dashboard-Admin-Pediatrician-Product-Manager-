import Loadable from 'app/components/Loadable';
import { lazy } from 'react';

const AppTable = Loadable(lazy(() => import('../../material-kit/tables/AppTable')));

const NameProviderRoutes = [
    {
        path: '/admin/table',
        element: <AppTable />,
    }
];

export default AdminRoutes;
