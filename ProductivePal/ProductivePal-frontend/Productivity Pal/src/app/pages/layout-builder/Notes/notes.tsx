import React, {FC} from 'react'
import PageCard from '../../../../_metronic/layout/components/PageContectDisplayer/pageCard'
import { PageTitle } from '../../../../_metronic/layout/core'

const notes: FC = () => {
  return (
    <>
      {/* <h1>Hello from Notes</h1> */}
      <PageTitle breadcrumbs={[]}>Notes</PageTitle>
      <PageCard Title="Notes" Description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis ex cum accusantium voluptatum eum minima maxime ratione, laborum ut sed sunt ullam explicabo aliquam quas tenetur totam veritatis consequuntur rerum quos molestiae adipisci vero deleniti? Iure quam exercitationem error quod culpa quasi,
         eius possimus repellendus fugiat,natus voluptatem temporibus atque." />
    </>
  )
}

export default notes