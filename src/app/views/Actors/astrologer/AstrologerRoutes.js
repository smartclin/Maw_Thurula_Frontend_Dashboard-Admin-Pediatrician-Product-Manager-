import Loadable from 'app/components/Loadable';
import { lazy } from 'react';
import {authRoles} from "../../../auth/authRoles";




const AstrologerDashboard = Loadable(lazy(() => import('../../Actors/astrologer/AstrologerDashboard')));
const NewJobs = Loadable(lazy(() => import('./NewJobRequestTable')))
const AstrologerViewRequest = Loadable(lazy(() => import('./AstrologerViewRequest')));
const AstrologerViewRequestWithResponse = Loadable(lazy(() => import('./AstrologerViewRequestWithResponse')));


const AstrologerRoutes = [
    { path: '/al', element: <AstrologerDashboard />, auth: authRoles.admin },
    { path: '/al/new_request', element: <NewJobs />, auth: authRoles.admin },
    { path: '/al/view_request', element: <AstrologerViewRequest />, auth: authRoles.admin },
    { path: '/al/view_request_with_response', element: <AstrologerViewRequestWithResponse />, auth: authRoles.admin },


];

export default AstrologerRoutes;
