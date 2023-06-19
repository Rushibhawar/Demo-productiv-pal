// vinit
import clsx from 'clsx'
import React, {FC} from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../helpers'
import {HeaderNotificationsMenu, HeaderUserMenu, QuickLinks} from '../../../partials'
import {useLayout} from '../../core'
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
const toolbarButtonMarginClass = 'ms-1 ms-lg-3',
  toolbarButtonHeightClass = 'w-30px h-30px w-md-40px h-md-40px',
  toolbarUserAvatarHeightClass = 'symbol-30px symbol-md-40px',
  toolbarButtonIconSizeClass = 'svg-icon-1 '

const Topbar: FC = () => {
  const {config} = useLayout()

  return (
    <div className='d-flex align-items-stretch flex-shrink-0 d-flex justify-content-between'>
      {/* NOTIFICATIONS
      <div className={clsx('d-flex align-items-center', toolbarButtonMarginClass)}>
        {/* begin::Menu- wrapper 
        <div
          className={clsx(
            'btn btn-icon btn-active-light-primary position-relative',
            toolbarButtonHeightClass
          )}
          data-kt-menu-trigger='click'
          data-kt-menu-attach='parent'
          data-kt-menu-placement='bottom-end'
          data-kt-menu-flip='bottom'
        >
          {/* /media/icons/duotune/general/gen007.svg 
          <div className='symbol symbol-45px px-2'>
            <KTSVG
              path='/media/icons/duotune/general/gen007.svg'
              className='svg-icon-1 symbol-label fs-2 fw-bolder'
            />

          
          </div>
        </div>
        <HeaderNotificationsMenu />
        {/* end::Menu wrapper 
      </div> */}
       
       {/* <Button variant="secondary">
         <KTSVG
            path='/media/icons/duotune/general/gen007.svg'
            className={toolbarButtonIconSizeClass}
          /> <Badge bg="danger">9</Badge>
            <span className="visually-hidden">unread messages</span>

           </Button>  */}

     {/* NOTIFICATIONS */}
     <div className={clsx('d-flex align-items-center mx-5', toolbarButtonMarginClass)}>
        {/* begin::Menu- wrapper */}
        <div
          className={clsx(
            'btn btn-icon btn-active-light-primary position-relative',
            toolbarButtonHeightClass
          )}
          data-kt-menu-trigger='click'
          data-kt-menu-attach='parent'
          data-kt-menu-placement='bottom-end'
          data-kt-menu-flip='bottom'
        >
         <div className=''>
         <KTSVG
            path='/media/icons/duotune/general/gen007.svg'
            className={toolbarButtonIconSizeClass}
          />
           <div className=''>
           <span className="badge badge-circle bg-danger" style={{position: "absolute",left:"25px",top:"-5px",width:"50%",height:"50%",fontSize:"75%"}}>3</span>
           </div>
         </div>
        </div>
        <HeaderNotificationsMenu />
        {/* end::Menu wrapper */}
      </div>

 
      {/* begin::User */}
      <div
        className={clsx('d-flex align-items-center', toolbarButtonMarginClass)}
        id='kt_header_user_menu_toggle'
      >
        {/* begin::Toggle */}
        <div
          className={clsx('cursor-pointer symbol', toolbarUserAvatarHeightClass)}
          data-kt-menu-trigger='click'
          data-kt-menu-attach='parent'
          data-kt-menu-placement='bottom-end'
          data-kt-menu-flip='bottom'
        >
          <span className="svg-icon-1 symbol-label fs-2 fw-bold">A</span>
        </div>
        <HeaderUserMenu />
        {/* end::Toggle */}
      </div>
      {/* end::User */}

      {/* begin::Aside Toggler */}
      {/* {config.header.left === 'menu' && (
        <div className='d-flex align-items-center d-lg-none ms-2 me-n3' title='Show header menu'>
          <div
            className='btn btn-icon btn-active-light-primary w-30px h-30px w-md-40px h-md-40px'
            id='kt_header_menu_mobile_toggle'
          >
            <KTSVG path='/media/icons/duotune/text/txt001.svg' className='svg-icon-1' />
          </div>
        </div>
      )} */}
    </div>
  )
}

export {Topbar}
