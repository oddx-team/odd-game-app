import React, { useEffect } from 'react'

import { useGameActions } from 'contexts/GameContext'
import { Form } from 'shared/components/Form'
import { Breadcrumbs } from 'shared/components/Breadcrumbs'
import { FormCont, FormElement, Title, Subtitle, ActionButton } from './styled'

export const PageGameSettings = () => {
  const { setSidebar } = useGameActions()

  useEffect(() => setSidebar(true), [setSidebar])

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
      onSubmit={(values) => {
        console.log(values)
      }}
    >
      <FormCont>
        <FormElement>
          <Breadcrumbs items={['Oddx', 'Game Settings']} />
          <Title>Game settings</Title>
          <Subtitle>Customize your settings:</Subtitle>

          <Form.Field.Input name='name' label='Name' />
          <Form.Field.Input name='theme' label='Theme' />

          <ActionButton type='submit' variant='primary' icon='plus' iconSize={0.25}>
            Save changes
          </ActionButton>
        </FormElement>
      </FormCont>
    </Form>
  )
}
