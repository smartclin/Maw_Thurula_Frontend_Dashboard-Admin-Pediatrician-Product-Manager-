import Loadable from 'app/components/Loadable';
import { lazy } from 'react';
import {authRoles} from "../../../auth/authRoles";




const AstrologerDashboard = Loadable(lazy(() => import('../../Actors/astrologer/AstrologerDashboard')));
const NewJobs = Loadable(lazy(() => import('./NewJobRequestTable')))
const AstrologerViewRequest = Loadable(lazy(() => import('./AstrologerViewRequest')));
const AstrologerViewRequestWithResponse = Loadable(lazy(() => import('./AstrologerViewRequestWithResponse')));
const EditProfile = Loadable(lazy(() => import('./EditProfile')));

const AstrologerRoutes = [
    { path: '/AL', element: <AstrologerDashboard />, auth: authRoles.admin },
    { path: '/al/new_request', element: <NewJobs />, auth: authRoles.admin },
    { path: '/al/view_request/:request_id', element: <AstrologerViewRequest />, auth: authRoles.admin },
    { path: '/al/view_request_with_response/:request_id', element: <AstrologerViewRequestWithResponse />, auth: authRoles.admin },
    { path: '/al/edit_profile', element: <EditProfile/>, auth: authRoles.admin },

];

export default AstrologerRoutes;
