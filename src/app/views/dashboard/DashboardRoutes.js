import Loadable from 'app/components/Loadable';
import { lazy } from 'react';
import { authRoles } from '../../auth/authRoles';

const Analytics = Loadable(lazy(() => import('./Analytics')));
const AdminDashboard = Loadable(lazy(() => import('../Actors/admin/AdminDashboard')));

const dashboardRoutes = [
  { path: '/admin', element: <AdminDashboard />, auth: authRoles.admin },
  { path: '/pt', element: <Analytics />, auth: authRoles.admin },
  { path: '/pm', element: <Analytics />, auth: authRoles.admin },
  { path: '/np', element: <Analytics />, auth: authRoles.admin },
  { path: '/al', element: <Analytics />, auth: authRoles.admin }
];

export default dashboardRoutes;
