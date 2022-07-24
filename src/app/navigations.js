import useAuth from "./hooks/useAuth";

export const navigations = [
  { label: 'PAGES', type: 'label' },
  {
    name: 'Session/Auth',
    icon: 'security',
    children: [
      { name: 'Sign in', iconText: 'SI', path: '/session/signin' },
      { name: 'Sign up', iconText: 'SU', path: '/session/signup' },
      { name: 'Forgot Password', iconText: 'FP', path: '/session/forgot-password' },
      { name: 'Error', iconText: '404', path: '/session/404' },
    ],
  },
  { name: 'Dashboard', path: '/dashboard/default', icon: 'dashboard' },
  { label: 'PAGES', type: 'label' },
  {
    name: 'Session/Auth',
    icon: 'security',
    children: [
      { name: 'Sign in', iconText: 'SI', path: '/session/signin' },
      { name: 'Sign up', iconText: 'SU', path: '/session/signup' },
      { name: 'Forgot Password', iconText: 'FP', path: '/session/forgot-password' },
      { name: 'Error', iconText: '404', path: '/session/404' },
    ],
  },
  { label: 'Components', type: 'label' },
  {
    name: 'Components',
    icon: 'favorite',
    badge: { value: '30+', color: 'secondary' },
    children: [
      { name: 'Auto Complete', path: '/material/autocomplete', iconText: 'A' },
      { name: 'Buttons', path: '/material/buttons', iconText: 'B' },
      { name: 'Checkbox', path: '/material/checkbox', iconText: 'C' },
      { name: 'Dialog', path: '/material/dialog', iconText: 'D' },
      { name: 'Expansion Panel', path: '/material/expansion-panel', iconText: 'E' },
      { name: 'Form', path: '/material/form', iconText: 'F' },
      { name: 'Icons', path: '/material/icons', iconText: 'I' },
      { name: 'Menu', path: '/material/menu', iconText: 'M' },
      { name: 'Progress', path: '/material/progress', iconText: 'P' },
      { name: 'Radio', path: '/material/radio', iconText: 'R' },
      { name: 'Switch', path: '/material/switch', iconText: 'S' },
      { name: 'Slider', path: '/material/slider', iconText: 'S' },
      { name: 'Snackbar', path: '/material/snackbar', iconText: 'S' },
      { name: 'Table', path: '/material/table', iconText: 'T' },
    ],
  },
  {
    name: 'Charts',
    icon: 'trending_up',
    children: [{ name: 'Echarts', path: '/charts/echarts', iconText: 'E' }],
  },
  {
    name: 'Documentation',
    icon: 'launch',
    type: 'extLink',
    path: 'http://demos.ui-lib.com/matx-react-doc/',
  },
];
export const navigations_ADMIN = [
  { label: 'Dashboard', type: 'label' },
  {
    name: 'Home ',
    icon: 'home',
    badge: { value: '', color: 'secondary' },
    children: [
      { name: 'Home', path: '/admin', iconText: 'A' },
    ],
  },

  { label: 'Admin', type: 'label' },
  {
    name: 'Mothers ',
    icon: 'pregnant_woman',
    badge: { value: '', color: 'secondary' },
    children: [
      { name: 'List', path: '/admin/mothers', iconText: 'A' },
      { name: 'Post Requests', path: '/admin/mothers_post_request', iconText: 'A' },

    ],
  },

  {
    name: 'Pediatrician ',
    icon: 'local_hospital',
    badge: { value: '', color: 'secondary' },
    children: [
      { name: 'List', path: '/admin/pediatricians', iconText: 'A' },
      { name: 'Articles', path: '/admin/pediatrician_articles', iconText: 'A' },
      { name: 'New Requests', path: '/admin/pediatrician_request', iconText: 'A' },

    ],
  },
  {
    name: 'Astrologers ',
    icon: 'recent_actors',
    badge: { value: '', color: 'secondary' },
    children: [
      { name: 'List', path: '/admin/astrologers', iconText: 'A' },
      { name: 'Reports', path: '/admin/astrologers_reports', iconText: 'A' },
    ],
  },
  {
    name: 'Name Providers ',
    icon: 'rate_review',
    badge: { value: '', color: 'secondary' },
    children: [
      { name: 'List', path: '/admin/name_providers', iconText: 'A' },
      { name: 'Reports', path: '/admin/name_providers_reports', iconText: 'A' },
    ],
  },
  {
    name: 'Ecommerce',
    icon: 'store',
    badge: { value: '', color: 'secondary' },
    children: [
      { name: 'Products', path: '/admin/ecommerce_products', iconText: 'A' },
      { name: 'Orders', path: '/admin/ecommerce_orders', iconText: 'A' },
      { name: 'Reports', path: '/admin/ecommerce_reports', iconText: 'A' },

    ],
  },
];
export const navigations_PM = [
  { label: 'Dashboard', type: 'label' },
  { label: 'Product Manager', type: 'label' },
  {
    name: 'Home ',
    icon: 'home',
    badge: { value: '', color: 'secondary' },
    children: [
      { name: 'Home', path: '/admin', iconText: 'A' },
    ],
  },
  {
    name: 'Ecommerce',
    icon: 'store',
    badge: { value: '', color: 'secondary' },
    children: [
      { name: 'Products', path: '/admin/ecommerce_products', iconText: 'A' },
      { name: 'Orders', path: '/admin/ecommerce_orders', iconText: 'A' },
      { name: 'Reports', path: '/admin/ecommerce_reports', iconText: 'A' },

    ],
  },
];
export const navigations_PT = [
  { label: 'Pediatrician', type: 'label' },
  {
    name: 'Home ',
    icon: 'home',
    badge: { value: '', color: 'secondary' },
    children: [
      { name: 'Home', path: '/admin', iconText: 'A' },
    ],
  },
  {
    name: 'Ecommerce',
    icon: 'store',
    badge: { value: '', color: 'secondary' },
    children: [
      { name: 'Products', path: '/admin/ecommerce_products', iconText: 'A' },
      { name: 'Orders', path: '/admin/ecommerce_orders', iconText: 'A' },
      { name: 'Reports', path: '/admin/ecommerce_reports', iconText: 'A' },

    ],
  },
];
export const navigations_NP = [
  { label: 'Name Provider', type: 'label' },
  {
    name: 'Home ',
    icon: 'home',
    badge: { value: '', color: 'secondary' },
    children: [
      { name: 'Home', path: '/admin', iconText: 'A' },
    ],
  },
  {
    name: 'Ecommerce',
    icon: 'store',
    badge: { value: '', color: 'secondary' },
    children: [
      { name: 'Products', path: '/admin/ecommerce_products', iconText: 'A' },
      { name: 'Orders', path: '/admin/ecommerce_orders', iconText: 'A' },
      { name: 'Reports', path: '/admin/ecommerce_reports', iconText: 'A' },

    ],
  },
];
export const navigations_AL = [
  { label: 'Astrologer', type: 'label' },
  {
    name: 'Home ',
    icon: 'home',
    badge: { value: '', color: 'secondary' },
    children: [
      { name: 'Home', path: '/al', iconText: 'A' },
    ],
  },
  {
    name: 'Jobs',
    icon: 'store',
    badge: { value: '', color: 'secondary' },
    children: [
      { name: 'New Request', path: '/al/new_request', iconText: 'A' },

    ],
  },
];