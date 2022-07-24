import Loadable from 'app/components/Loadable';
import { lazy } from 'react';
import {authRoles} from "../../../auth/authRoles";



const NameProviderDashboard = Loadable(lazy(() => import('../../Actors/name-provider/NameProviderDashboard')));
const NewJobs = Loadable(lazy(() => import('./NewJobRequest')));


const NameProviderRoutes = [
    { path: '/np', element: <NameProviderDashboard />, auth: authRoles.admin },
    { path: '/np/new_request', element: <NewJobs />, auth: authRoles.admin },


];

export default NameProviderRoutes;
