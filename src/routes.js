import React from 'react'

const Characters = React.lazy(() => import('./views/Characters'))
const Locations = React.lazy(() => import('./views/Locations'))
const Episodes = React.lazy(() => import('./views/Episodes'))

export const routes = [
  {
    path: '/characters',
    name: 'Characters',
    component: Characters
  },
  { path: '/locations', name: 'Locations', component: Locations },
  { path: '/episodes', name: 'Episodes', component: Episodes }
]
