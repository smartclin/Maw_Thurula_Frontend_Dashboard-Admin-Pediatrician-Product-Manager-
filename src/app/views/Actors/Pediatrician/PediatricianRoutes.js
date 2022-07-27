import Loadable from 'app/components/Loadable';
import { lazy } from 'react';
import {authRoles} from "../../../auth/authRoles";



const PediatricianDashboard = Loadable(lazy(() => import('../../Actors/Pediatrician/PediatricianDashboard')));



const AstrologerRoutes = [
    { path: '/pt', element: <PediatricianDashboard/>, auth: authRoles.admin },



];

export default AstrologerRoutes;
