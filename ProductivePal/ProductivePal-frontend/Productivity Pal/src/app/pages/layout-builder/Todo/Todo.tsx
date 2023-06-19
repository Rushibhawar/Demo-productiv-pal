// vinit
import React, {FC} from 'react'
import PageCard from '../../../../_metronic/layout/components/PageContectDisplayer/pageCard'
import Table from './Content/Table'
import { PageTitle } from '../../../../_metronic/layout/core'
import BootstrapTable from './Content/BootstrapTable'

const Todo: FC = () => {
  return (
    <>
    <PageTitle breadcrumbs={[]}>To-Do</PageTitle>
      {/* <h1>Hello TODO</h1> */}
      <PageCard Title="To-DO " Description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis ex cum accusantium voluptatum eum minima maxime ratione, laborum ut sed sunt ullam explicabo aliquam quas tenetur totam veritatis consequuntur rerum quos molestiae adipisci vero deleniti? Iure quam exercitationem error quod culpa quasi,
         eius possimus repellendus fugiat,natus voluptatem temporibus atque." />
{/* 
<Nav fill variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="/home">Active</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Loooonger NavLink</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav.Item>
    </Nav> */}
   {/* <Table/>   */}
   <BootstrapTable/>
       </>
  )
}

export default Todo