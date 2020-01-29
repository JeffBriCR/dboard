/** @jsx jsx */
import { jsx } from 'theme-ui'

export default function TextArea({ error, register, label, ...props }: any) {
  return (
    <div sx={{ variant: 'form.element' }}>
      {label && <p sx={{ margin: 0 }}>{label}</p>}
      <textarea
        {...props}
        sx={{
          variant: 'form.input',
          border: error && '1px solid',
          borderColor: error && 'error',
        }}
        ref={register}
      />
      {error && <p sx={{ variant: 'text.error', margin: 0 }}>{error.message}</p>}
    </div>
  )
}
