/** @jsx jsx */
import { jsx } from 'theme-ui'
const { PropagateLoader } = require('react-spinners')

export default function Button({ isSubmitting, sx = {}, children, ...props }: any) {
  const styles = {
    variant: 'buttons.secondary',
    bg: isSubmitting ? 'primary' : 'black',
    ...sx,
  }
  return (
    <button sx={styles} {...props}>
      {isSubmitting ? <PropagateLoader sizeUnit={'em'} size={0.5} /> : children}
    </button>
  )
}
