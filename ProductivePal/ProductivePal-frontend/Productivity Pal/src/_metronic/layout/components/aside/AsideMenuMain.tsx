
// vinit
/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import {useIntl} from 'react-intl'
import {KTSVG} from '../../../helpers'
import {AsideMenuItemWithSub} from './AsideMenuItemWithSub'
import {AsideMenuItem} from './AsideMenuItem'
import { visitFunctionBody } from 'typescript'

export function AsideMenuMain() {
  const intl = useIntl()

  return (
    <>
      <AsideMenuItem
        to='/dashboard'
        icon='/media/icons/duotune/art/art002.svg'
        title={intl.formatMessage({id: 'MENU.DASHBOARD'})}
        fontIcon='bi-app-indicator'
      />
      
      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>List of Features</span>
        </div>
      </div>
      <AsideMenuItem
        to='/todo'
        title='To DO'
        fontIcon='bi-archive'
        icon='/media/icons/duotune/general/gen022.svg'
      />  
      
      <AsideMenuItem
        to='/notes'
        title='Notes'
        fontIcon='bi-archive'
        icon='/media/icons/duotune/general/gen022.svg'
      />  
      <AsideMenuItem
        to='/projectMgmt'
        title='Project Management'
        // fontIcon='bi-archive'
         icon='/media/icons/duotune/general/gen022.svg'
      />  
      <div className='menu-item'>
        <div className='menu-content'>
          <div className='separator mx-1 my-4'></div>
        </div>
      </div>
     
    </>
  )
}
