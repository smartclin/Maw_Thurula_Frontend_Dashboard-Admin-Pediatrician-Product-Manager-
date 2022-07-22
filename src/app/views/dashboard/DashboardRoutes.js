import Loadable from 'app/components/Loadable';
import { lazy } from 'react';
import { authRoles } from '../../auth/authRoles';

const Analytics = Loadable(lazy(() => import('./Analytics')));
const AdminDashboard = Loadable(lazy(() => import('../Actors/admin/AdminDashboard')));

const dashboardRoutes = [
  { path: '/ad2min', element: <AdminDashboard />, auth: authRoles.admin },
  { path: '/3pt', element: <Analytics />, auth: authRoles.admin },
  { path: '/4pm', element: <Analytics />, auth: authRoles.admin },
  { path: '/n5p', element: <Analytics />, auth: authRoles.admin },
  { path: '/a6l', element: <Analytics />, auth: authRoles.admin }
];

export default dashboardRoutes;
