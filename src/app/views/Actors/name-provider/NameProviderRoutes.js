import Loadable from 'app/components/Loadable';
import { lazy } from 'react';
import {authRoles} from "../../../auth/authRoles";



const NameProviderDashboard = Loadable(lazy(() => import('../../Actors/name-provider/NameProviderDashboard')));
const NewJobs = Loadable(lazy(() => import('./NewJobRequest')));
const NameProviderViewRequest = Loadable(lazy(() => import('./NameProviderViewRequest')));
const NameProviderViewRequestWithResponse = Loadable(lazy(() => import('./NameProviderViewRequestWithResponse')));
const EditProfile = Loadable(lazy(() => import('./EditProfile')));

const NameProviderRoutes = [
    { path: '/NP', element: <NameProviderDashboard />, auth: authRoles.admin },
    { path: '/np/new_request', element: <NewJobs />, auth: authRoles.admin },
    { path: '/np/view_request', element: <NameProviderViewRequest />, auth: authRoles.admin },
    { path: '/np/view_request_with_response', element: <NameProviderViewRequestWithResponse />, auth: authRoles.admin },
    { path: '/np/edit_profile', element: <EditProfile/>, auth: authRoles.admin },
];

export default NameProviderRoutes;
