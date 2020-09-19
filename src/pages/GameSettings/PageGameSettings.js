import React from 'react'
// import PropTypes from 'prop-types'

import { Form } from 'shared/components/Form'
import { Breadcrumbs } from 'shared/components/Breadcrumbs'
import { FormCont, FormElement, Title, Subtitle } from './styled'

export const PageGameSettings = () => {
  return (
    <Form
      initialValues={{
        name: '',
        theme: '',
        nsfw: '',
        language: '',
        animation: '',
        strangerInvite: ''
      }}
      validations={{
        name: Form.is.required(),
        theme: Form.is.required()
      }}
    >
      <FormCont>
        <FormElement>
          <Breadcrumbs items={['Oddx', 'Game Settings']} />
          <Title>Game settings</Title>
          <Subtitle>Customize your settings:</Subtitle>

        </FormElement>
      </FormCont>
    </Form>
  )
}
