import Loadable from 'app/components/Loadable';
import { lazy } from 'react';
import {authRoles} from "../../../auth/authRoles";



const AstrologerDashboard = Loadable(lazy(() => import('../../Actors/astrologer/AstrologerDashboard')));
const NewJobs = Loadable(lazy(() => import('./NewJobRequest')));


const AstrologerRoutes = [
    { path: '/al', element: <AstrologerDashboard />, auth: authRoles.admin },
    { path: '/al/new_request', element: <NewJobs />, auth: authRoles.admin },


];

export default AstrologerRoutes;
