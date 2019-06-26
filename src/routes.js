import React from 'react';

const Profile = React.lazy(() => import('./components/users/Profile'));


export const routes = [
  { path: '/', exact: true, name: 'Home', component: Profile },  // to be updated
  { path: '/profile', name: 'Profile', component: Profile },
];

