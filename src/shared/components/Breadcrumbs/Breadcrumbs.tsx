import React, { Fragment } from 'react'

import { Container, Divider } from './styled'

type BreadcrumbsProps = {
  items: string[]
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => (
  <Container>
    {items.map((item, index) => (
      <Fragment key={item}>
        {index !== 0 && <Divider>/</Divider>}
        {item}
      </Fragment>
    ))}
  </Container>
)

export default Breadcrumbs
