// vinit
import React from 'react'
import {MenuItem} from './MenuItem'
import {MenuInnerWithSub} from './MenuInnerWithSub'
import {MegaMenu} from './MegaMenu'
import {useIntl} from 'react-intl'

export function MenuInner() {
  const intl = useIntl()
  return (
    <>
    {/* PAGES */}
      <MenuItem title={intl.formatMessage({id: 'MENU.DASHBOARD'})} to='/dashboard' />
      <MenuItem title='To Do' to='/todo' />
      <MenuItem to='/notes' title='Notes' />
      <MenuItem to='/projectMgmt' title='Project Management'/>
        
         
           
      
    </>
  )
}
