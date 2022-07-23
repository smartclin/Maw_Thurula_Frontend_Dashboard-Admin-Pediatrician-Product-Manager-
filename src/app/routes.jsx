import AuthGuard from 'app/auth/AuthGuard';
import NotFound from 'app/views/sessions/NotFound';
import sessionRoutes from 'app/views/sessions/SessionRoutes';
import { Navigate } from 'react-router-dom';
import MatxLayout from './components/MatxLayout/MatxLayout';
import AdminRoutes from "./views/Actors/admin/AdminRoutes";

const routes = [
  {
    element: (
      <AuthGuard>
        <MatxLayout />
      </AuthGuard>
    ),
    children: [...AdminRoutes],
  },
  ...sessionRoutes,
  { path: '/', element: <Navigate to="/admin" /> },
  { path: '*', element: <NotFound /> },
];

export default routes;
