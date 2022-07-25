import Loadable from 'app/components/Loadable';
import { lazy } from 'react';
import {authRoles} from "../../../auth/authRoles";
import OneAstrologerReport from "./astrologers/OneAstrologerReport";
import OneNameProviderReport from "./name-providers/OneNameProviderReport";

const Analytics = Loadable(lazy(() => import('../../dashboard/Analytics')));
const AdminDashboard = Loadable(lazy(() => import('../../Actors/admin/AdminDashboard')));
//this for mother's routes
const MothersList = Loadable(lazy(() => import('./mothers/MothersSinglePostView')));
const MothersPostRequests = Loadable(lazy(() => import('./mothers/MothersPostRequests')));

//this for pediatrician routes
const PediatricianList = Loadable(lazy(() => import('../../Actors/admin/pediatricians/PediatricianList')));
const PediatricianArticles = Loadable(lazy(() => import('../../Actors/admin/pediatricians/PediatricianProfile')));
const PediatricianRequests = Loadable(lazy(() => import('../../Actors/admin/pediatricians/PediatricianRequests')))

//this for add lazy loading astrologer component
const Astrologer = Loadable(lazy(() => import('../../Actors/admin/astrologers/Astrologers')));
const AstrologerReports = Loadable(lazy(() => import('../../Actors/admin/astrologers/AstrologerReports')));
const OneAstrologerReports = Loadable(lazy(() => import('../../Actors/admin/astrologers/OneAstrologerReport')));

//this for add lazy loading name provider component
const NameProvider = Loadable(lazy(() => import('../../Actors/admin/name-providers/NameProviders')));
const NameProviderReports = Loadable(lazy(() => import('../../Actors/admin/name-providers/NameProviderReports')));
const OneNameProviderReports = Loadable(lazy(() => import('../../Actors/admin/name-providers/OneNameProviderReport')));

//this for add lazy loading ecommerce component
const EcommerceProducts = Loadable(lazy(() => import('./ecommerce/EcommerceProduct')));
const EcommerceOrders = Loadable(lazy(() => import('./ecommerce/EcommerceOrders')));
const EcommerceReports = Loadable(lazy(() => import('./ecommerce/EcommerceReports')));

const AdminRoutes = [
    { path: '/admin', element: <AdminDashboard />, auth: authRoles.admin },

    { path: '/admin/mothers', element: <MothersList />, auth: authRoles.admin },
    { path: '/admin/mothers_post_request', element: <MothersPostRequests />, auth: authRoles.admin },

    { path: '/admin/pediatricians', element: <PediatricianList />, auth: authRoles.admin },
    { path: '/admin/pediatrician_articles', element: <PediatricianArticles />, auth: authRoles.admin },
    { path: '/admin/pediatrician_request', element: <PediatricianRequests />, auth: authRoles.admin },

    { path: '/admin/astrologers', element: <Astrologer />, auth: authRoles.admin },
    { path: '/admin/astrologers_reports', element: <AstrologerReports />, auth: authRoles.admin },
    { path: '/admin/one_astrologer_report', element: <OneAstrologerReport />, auth: authRoles.admin },

    { path: '/admin/name_providers', element: <NameProvider />, auth: authRoles.admin },
    { path: '/admin/name_providers_reports', element: <NameProviderReports />, auth: authRoles.admin },
    { path: '/admin/one_name_provider_report', element: <OneNameProviderReport />, auth: authRoles.admin },

    { path: '/admin/ecommerce_products', element: <EcommerceProducts />, auth: authRoles.admin },
    { path: '/admin/ecommerce_orders', element: <EcommerceOrders />, auth: authRoles.admin },
    { path: '/admin/ecommerce_reports', element: <EcommerceReports />, auth: authRoles.admin },
];

export default AdminRoutes;
