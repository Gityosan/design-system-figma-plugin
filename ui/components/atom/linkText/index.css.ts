import { style } from '@vanilla-extract/css'
import { globalVars } from '@/assets/styles'

export const linkTextStyle = style({
  'cursor': 'pointer',
  'color': globalVars.color['blue-1000'],
  ':focus': {
    color: globalVars.color['blue-1000'],
    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: globalVars.color['focus-yellow'],
    boxSizing: 'content-box'
  },
  ':visited': {
    color: globalVars.color['magenta-900']
  },
  ':active': {
    color: globalVars.color['orange-700']
  },
  ':hover': {
    color: globalVars.color['blue-900'],
    backgroundColor: globalVars.color['solid-grey-50']
  },
  'selectors': {
    '&[aria-disabled=true]': {
      cursor: 'default',
      color: globalVars.color['blue-1000'],
      backgroundColor: globalVars.color.white,
      borderWidth: '0',
      outline: 'none'
    }
  }
})
