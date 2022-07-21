// export const navigations = [
//   { label: 'PAGES', type: 'label' },
//   {
//       name: 'Session/Auth',
//     icon: 'security',
//     children: [
//       { name: 'Sign in', iconText: 'SI', path: '/session/signin' },
//       { name: 'Sign up', iconText: 'SU', path: '/session/signup' },
//       { name: 'Forgot Password', iconText: 'FP', path: '/session/forgot-password' },
//       { name: 'Error', iconText: '404', path: '/session/404' },
//     ],
//   },
//   { name: 'Dashboard', path: '/dashboard/default', icon: 'dashboard' },
//   { label: 'PAGES', type: 'label' },
//   {
//     name: 'Session/Auth',
//     icon: 'security',
//     children: [
//       { name: 'Sign in', iconText: 'SI', path: '/session/signin' },
//       { name: 'Sign up', iconText: 'SU', path: '/session/signup' },
//       { name: 'Forgot Password', iconText: 'FP', path: '/session/forgot-password' },
//       { name: 'Error', iconText: '404', path: '/session/404' },
//     ],
//   },
//   { label: 'Components', type: 'label' },
//   {
//     name: 'Components',
//     icon: 'favorite',
//     badge: { value: '30+', color: 'secondary' },
//     children: [
//       { name: 'Auto Complete', path: '/material/autocomplete', iconText: 'A' },
//       { name: 'Buttons', path: '/material/buttons', iconText: 'B' },
//       { name: 'Checkbox', path: '/material/checkbox', iconText: 'C' },
//       { name: 'Dialog', path: '/material/dialog', iconText: 'D' },
//       { name: 'Expansion Panel', path: '/material/expansion-panel', iconText: 'E' },
//       { name: 'Form', path: '/material/form', iconText: 'F' },
//       { name: 'Icons', path: '/material/icons', iconText: 'I' },
//       { name: 'Menu', path: '/material/menu', iconText: 'M' },
//       { name: 'Progress', path: '/material/progress', iconText: 'P' },
//       { name: 'Radio', path: '/material/radio', iconText: 'R' },
//       { name: 'Switch', path: '/material/switch', iconText: 'S' },
//       { name: 'Slider', path: '/material/slider', iconText: 'S' },
//       { name: 'Snackbar', path: '/material/snackbar', iconText: 'S' },
//       { name: 'Table', path: '/material/table', iconText: 'T' },
//     ],
//   },
//   {
//     name: 'Charts',
//     icon: 'trending_up',
//     children: [{ name: 'Echarts', path: '/charts/echarts', iconText: 'E' }],
//   },
//   {
//     name: 'Documentation',
//     icon: 'launch',
//     type: 'extLink',
//     path: 'http://demos.ui-lib.com/matx-react-doc/',
//   },
// ];


export const navigations = [
  { name: 'admin', path: '/admin', icon: 'dashboard' },
  { name: 'pt', path: '/pt', icon: 'dashboard' },
  { name: 'np', path: '/np', icon: 'dashboard' },
  { name: 'al', path: '/al', icon: 'dashboard' },
  { name: 'pm', path: '/pm', icon: 'dashboard' },

  { label: 'Admin', type: 'label' },
  {
    name: 'Mothers ',
    icon: 'pregnant_woman',
    badge: { value: '', color: 'secondary' },
    children: [
      { name: 'List', path: '/pt', iconText: 'A' },
      { name: 'Post Requests', path: '/material/autocomplete', iconText: 'A' },

    ],
  },

  {
    name: 'Pediatrician ',
    icon: 'local_hospital',
    badge: { value: '', color: 'secondary' },
    children: [
      { name: 'List', path: '/material/autocomplete', iconText: 'A' },
      { name: 'Articles', path: '/material/autocomplete', iconText: 'A' },
      { name: 'New Requests', path: '/material/autocomplete', iconText: 'A' },

    ],
  },
  {
    name: 'Astrologers ',
    icon: 'recent_actors',
    badge: { value: '', color: 'secondary' },
    children: [
      { name: 'List', path: '/material/autocomplete', iconText: 'A' },
      { name: 'Reports', path: '/material/autocomplete', iconText: 'A' },
    ],
  },
  {
    name: 'Name Providers ',
    icon: 'rate_review',
    badge: { value: '', color: 'secondary' },
    children: [
      { name: 'List', path: '/material/autocomplete', iconText: 'A' },
      { name: 'Reports', path: '/material/autocomplete', iconText: 'A' },
    ],
  },
  {
    name: 'Ecommerce',
    icon: 'store',
    badge: { value: '', color: 'secondary' },
    children: [
      { name: 'Products', path: '/material/autocomplete', iconText: 'A' },
      { name: 'Orders', path: '/material/autocomplete', iconText: 'A' },
      { name: 'Reports', path: '/material/autocomplete', iconText: 'A' },

    ],
  },
];
