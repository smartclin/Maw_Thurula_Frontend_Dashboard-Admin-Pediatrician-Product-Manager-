import Loadable from 'app/components/Loadable';
import { lazy } from 'react';
import {authRoles} from "../../../auth/authRoles";



const PediatricianDashboard = Loadable(lazy(() => import('../../Actors/Pediatrician/PediatricianDashboard')));
const PediatricianViewArticles = Loadable(lazy(() => import('../../Actors/Pediatrician/PediatriciansViewArticles')));
const PediatricianViewFullArticles = Loadable(lazy(() => import('../../Actors/Pediatrician/PediatriciansViewFullArticle')));
const PediatricianWriteArticles = Loadable(lazy(() => import('../../Actors/Pediatrician/PediatriciansWriteArticles')));
const PediatricianViewFollowers = Loadable(lazy(() => import('../../Actors/Pediatrician/FollowersList')));


const PediatriciansRoutes = [
    { path: '/PT', element: <PediatricianDashboard/>, auth: authRoles.admin },
    { path: '/pt/PediatricianViewArticles', element: <PediatricianViewArticles/>, auth: authRoles.admin },
    { path: '/pt/PediatricianViewFullArticles/:id/:id1/:id2', element: <PediatricianViewFullArticles/>, auth: authRoles.admin },
    { path: '/pt/PediatricianWriteArticles', element: <PediatricianWriteArticles/>, auth: authRoles.admin },
    { path: '/pt/PediatricianViewFollowers', element: <PediatricianViewFollowers/>, auth: authRoles.admin },

];

export default PediatriciansRoutes;