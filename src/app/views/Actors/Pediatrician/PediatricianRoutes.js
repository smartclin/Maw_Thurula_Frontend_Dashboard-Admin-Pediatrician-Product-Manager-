import Loadable from 'app/components/Loadable';
import { lazy } from 'react';
import {authRoles} from "../../../auth/authRoles";



const PediatricianDashboard = Loadable(lazy(() => import('../../Actors/Pediatrician/PediatricianDashboard')));
const PediatricianViewArticles = Loadable(lazy(() => import('../../Actors/Pediatrician/PediatriciansViewArticles')));
const PediatricianViewFullArticles = Loadable(lazy(() => import('../../Actors/Pediatrician/PediatriciansViewFullArticle')));
const PediatricianWriteArticles = Loadable(lazy(() => import('../../Actors/Pediatrician/PediatriciansWriteArticles')));


const PediatriciansRoutes = [
    { path: '/PT', element: <PediatricianDashboard/>, auth: authRoles.admin },
    { path: '/pt/PediatricianViewArticles', element: <PediatricianViewArticles/>, auth: authRoles.admin },
    { path: '/pt/PediatricianViewFullArticles', element: <PediatricianViewFullArticles/>, auth: authRoles.admin },
    { path: '/pt/PediatricianWriteArticles', element: <PediatricianWriteArticles/>, auth: authRoles.admin },



];

export default PediatriciansRoutes;
