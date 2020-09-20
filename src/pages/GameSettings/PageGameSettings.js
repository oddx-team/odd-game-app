import React, { useEffect } from 'react'

import { useGameActions } from 'contexts/GameContext'
import { Form } from 'shared/components/Form'
import { Breadcrumbs } from 'shared/components/Breadcrumbs'
import { FormCont, FormElement, Title, ActionButton } from './styled'

export const PageGameSettings = () => {
  const { setSidebar } = useGameActions()

  useEffect(() => setSidebar(true), [setSidebar])

  return (
    <Form
      initialValues={{
        theme: false,
        nsfw: false,
        animation: false,
        language: '',
        strangerInvite: false
      }}
      validations={{
        // language: Form.is.required()
      }}
      onSubmit={(values) => {
        console.log(values)
      }}
    >
      <FormCont>
        <FormElement>
          <Breadcrumbs items={['Oddx', 'Game Settings']} />
          <Title>GAME SETTINGS</Title>

          <Form.Field.Toggle name='theme' label='Dark theme' />
          <Form.Field.Toggle name='nsfw' label='Show nsfw' />
          <Form.Field.Toggle name='animation' label='Animation effect' />
          <Form.Field.Toggle name='strangerInvite' label='Stranger invite' />
          <Form.Field.Toggle name='language' label='Language' />

          <ActionButton type='submit' variant='primary' icon='plus' iconSize={0.25}>
            Save changes
          </ActionButton>
        </FormElement>
      </FormCont>
    </Form>
  )
}
