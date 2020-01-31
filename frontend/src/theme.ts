export default {
  badges: {
    primary: {
      color: 'background',
      bg: 'header',
      p: 2,
      fontFamily: 'body',
    },
    success: {
      color: 'accent',
      bg: 'success',
      p: 2,
      fontFamily: 'body',
      fontWeight: 'semi',
      py: 2,
      px: 3,
    },
    fail: {
      color: 'background',
      bg: 'error',
      p: 2,
      fontFamily: 'body',
      fontWeight: 'semi',
      py: 2,
      px: 3,
    },
    outline: {
      color: 'accent',
      py: 2,
      px: 3,
      bg: 'transparent',
      fontFamily: 'body',
      fontWeight: 'semi',
      boxShadow: 'inset 0 0 0 1px',
    },
  },
  heading: {
    title: {
      fontFamily: 'heading',
      fontWeight: 'bold',
      lineHeight: 'heading',
      margin: '1em 2em',
    },
    primary: {
      fontFamily: 'heading',
      fontWeight: 'body',
      lineHeight: 'heading',
    },
    secundary: {
      fontFamily: 'heading',
      fontWeight: 'light',
      lineHeight: 'heading',
    },
    details: {
      fontFamily: 'heading',
      fontWeight: 'light',
      lineHeight: 'heading',
      fontSize: 0,
    },
  },
  buttons: {
    primary: {
      color: 'background',
      bg: 'primary',
      '&:hover': {
        bg: 'text',
      },
    },
    secondary: {
      fontSize: 3,
      fontFamily: 'body',
      fontWeight: 'heading',
      color: 'background',
      bg: 'header',
      border: '1px solid white',
      borderRadius: '7px',
      '&:hover': {
        bg: 'accent',
      },
    },
  },
  sizes: {
    container: '100%',
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body: 'Gothic A1',
    heading: 'Poppins',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    light: 200,
    semi: 300,
    body: 400,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  colors: {
    header: '#000',
    accent: '#333333',
    text: '#000',
    background: '#fff',
    primary: '#008080',
    secondary: '#00bfa5',
    muted: '#f6f6f6',
    error: '#ff0070',
    success: '#22feb9',
  },
  text: {
    error: {
      color: 'error',
    },
    success: {
      color: 'success',
    },
    detail: {
      color: 'accent',
      fontSize: '0.8em',
    },
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
    },
    h1: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 5,
    },
    h2: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'body',
      fontSize: 4,
    },
    h3: {
      color: 'accent',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'light',
      fontSize: 3,
    },
    h4: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 2,
    },
    h5: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 1,
    },
    h6: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 0,
    },
    p: {
      color: 'text',
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
    },
    a: {
      color: 'primary',
    },
    pre: {
      fontFamily: 'monospace',
      overflowX: 'auto',
      code: {
        color: 'inherit',
      },
    },
    code: {
      fontFamily: 'monospace',
      fontSize: 'inherit',
    },
    table: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0,
    },
    th: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
    td: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
    img: {
      maxWidth: '100%',
    },
  },
}
