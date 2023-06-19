// vinit
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {FC} from 'react'
import {useIntl} from 'react-intl'
import {PageTitle} from '../../../_metronic/layout/core'
import  {Features}  from '../../../_metronic/layout/components/Cards/Features'
import PageCard from '../../../_metronic/layout/components/PageContectDisplayer/pageCard'
const DashboardWrapper: FC = () => {
  const intl = useIntl()
  return (
    <>
      {/*<DashboardPage /> */}
       <PageTitle breadcrumbs={[]}>{intl.formatMessage({id: 'MENU.DASHBOARD'})}</PageTitle>
        <PageCard Title="Productivity Pal" Description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis ex cum accusantium voluptatum eum minima maxime ratione, laborum ut sed sunt ullam explicabo aliquam quas tenetur totam veritatis consequuntur rerum quos molestiae adipisci vero deleniti? Iure quam exercitationem error quod culpa quasi,
         eius possimus repellendus fugiat,natus voluptatem temporibus atque." />
         
         <div className='row gy-5 gx-xl-8'>
      <div className='col-xxl-4'>
      <div className="card card-xxl-stretch">
      <div className='card-header align-items-center border-0 mt-4'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='fw-bolder mb-2 text-dark'>Features:</span>
         </h3>
        
       </div>
          
       <div className='card-body  d-flex justify-content-evenly flex-wrap '>
       <Features className='danger' chartColor='warning' Title="Card1" Description='description 1 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat magnam soluta sed. Illo, temporibus.' Start={12} Completed={10}/>
       <Features className='warning' chartColor='light' Title="Card2" Description='description 2' Start={12} Completed={10}/>
       <Features className='black' chartColor='primary' Title="Card3" Description='description 3' Start={12} Completed={10}/>
       
      </div>
       </div>
        </div>
        </div>
    </>
  )
}

export {DashboardWrapper}
