/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { useMutation } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import useAccountName from 'hooks/useAccountName'
import TextArea from 'components/TextArea'
import TextInput from 'components/TextInput'
import Button from 'components/Button'

const INSERT_ACTIONS = gql`
  mutation InsertActions($title: String, $description: String, $creator: String, $budget: String, $kpi: String) {
    insert_actions(objects: { description: $description, title: $title, creator: $creator, budget: $budget, kpi: $kpi }) {
      affected_rows
    }
  }
`

const validationSchema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().required(),
  budget: yup.string().required(),
  kpi: yup.string().required(),
})

export default function CreateActionForm() {
  const {
    register,
    handleSubmit,
    errors,
    formState: { isSubmitting },
  } = useForm({ validationSchema })
  const [insertAction] = useMutation(INSERT_ACTIONS)
  const account_name = useAccountName()

  const onSubmit = (data: {}) => {
    console.log(data)
    insertAction({
      variables: {
        creator: account_name,
        ...data,
      },
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextInput label="Title" name="title" register={register} error={errors.title} />
      <TextArea label="Description" name="description" register={register} error={errors.description} />
      <TextInput label="Budget" name="budget" register={register} error={errors.budget} />
      <TextArea label="kpi" name="kpi" register={register} error={errors.kpi} />
      <br />
      <Button type="submit" disabled={!account_name} isSubmitting={isSubmitting}>
        Submit
      </Button>
    </form>
  )
}
