import Loadable from 'app/components/Loadable';
import { lazy } from 'react';
import {authRoles} from "../../../auth/authRoles";


const Analytics = Loadable(lazy(() => import('../../dashboard/Analytics')));
const AdminDashboard = Loadable(lazy(() => import('../../Actors/admin/AdminDashboard')));

const AdminRoutes = [
    { path: '/admin/', element: <AdminDashboard />, auth: authRoles.admin },
    { path: '/admin/mothers_list', element: <Analytics />, auth: authRoles.admin },
    { path: '/admin/mothers_post_request', element: <Analytics />, auth: authRoles.admin },
    { path: '/admin/np', element: <Analytics />, auth: authRoles.admin },
    { path: '/admin/al', element: <Analytics />, auth: authRoles.admin }
];

export default AdminRoutes;
