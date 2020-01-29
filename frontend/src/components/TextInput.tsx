/** @jsx jsx */
import { jsx } from 'theme-ui'

export default function Input({ error, register, detail, onClick, label, ...props }: any) {
  return (
    <div sx={{ variant: 'form.element', display: props.hidden ? 'none' : 'block' }} onClick={onClick && onClick}>
      {label && <p sx={{ margin: 0 }}>{label}</p>}
      <input
        sx={{
          variant: 'form.input',
          border: error && '1px solid',
          borderColor: error && 'error',
        }}
        ref={register}
        {...props}
      />
      {detail && !error && <p sx={{ variant: 'text.detail', margin: 0 }}>{detail}</p>}
      {error && <p sx={{ variant: 'text.error', margin: 0 }}>{error.message}</p>}
    </div>
  )
}
