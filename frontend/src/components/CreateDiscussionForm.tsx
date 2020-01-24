/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag'
import useAccountName from 'hooks/useAccountName'

const INSERT_DISCUSSION = gql`
	mutation InsertDiscussion($title: String, $description: String, $creator: String) {
		insert_discussions(objects: { description: $description, title: $title, creator: $creator }) {
			affected_rows
		}
	}
`;

const validationSchema = yup.object().shape({
	title: yup.string().required(),
	description: yup.string().required()
});

export default function CreateDiscussionForm() {
	const { register, handleSubmit, errors } = useForm({ validationSchema });
  const [ insertDiscussion ] = useMutation(INSERT_DISCUSSION)
  const account_name = useAccountName()

	const onSubmit = (data: {}) => {
		console.log(data);
		insertDiscussion({
      variables: {
        creator: account_name,
        ...data
      }
    });
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<input name="title" ref={register} />
			{errors.title && <span>Title is required</span>}
			<input name="description" ref={register} />
			{errors.description && <span>Description is required</span>}
			<input type="submit" disabled={!account_name}/>
		</form>
	);
}
