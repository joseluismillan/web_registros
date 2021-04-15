import React from 'react'
import CIcon from '@coreui/icons-react'

const _nav =  [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
    badge: {
      color: 'primary',
      text: 'On-line',
    }
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Informes']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Graficos',
    to: '/theme/colors',
    icon: 'cil-chart-pie',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Datos',
    to: '/theme/typography',
    icon: 'cil-pencil',
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Configuracion']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Sensores',
    route: '/base',
    icon: 'cil-puzzle',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Centros',
    route: '/buttons',
    icon: 'cil-cursor',
  },
]

export default _nav
