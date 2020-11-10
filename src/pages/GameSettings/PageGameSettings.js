import React from 'react'
import { Form } from 'shared/components/Form'
import { Breadcrumbs } from 'shared/components/Breadcrumbs'
import { FormCont, FormElement, Title, ActionButton } from './styled'

import toast from 'shared/utils/toast'

export const PageGameSettings = () => {
  return (
    <Form
      initialValues={{
        theme: false,
        nsfw: true,
        animation: true,
        language: false,
        strangerInvite: true,
        email: '',
        password: ''
      }}
      validations={{
        // language: Form.is.required()
        email: [Form.is.required(), Form.is.minLength(3)],
        password: Form.is.required()
      }}
      onSubmit={(values) => {
        // console.log(values)
        toast.success('save_success')
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
