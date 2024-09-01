import { style, styleVariants } from '@vanilla-extract/css'
import { globalVars } from '@/assets/styles'

export const styles = {
  selectWrapper: style({
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  }),
  labelContainer: style({
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  }),
  selectContainer: style({
    position: 'relative',
    height: '56px',
    width: '100%'
  }),
  select: style({
    'appearance': 'none',
    'width': '100%',
    'height': '100%',
    'padding': '12px 16px',
    'color': globalVars.color['solid-grey-900'],
    'backgroundColor': globalVars.color.white,
    'borderWidth': '1px',
    'borderStyle': 'solid',
    'borderColor': globalVars.color['solid-grey-900'],
    'borderRadius': globalVars.borderRadius.small,
    'cursor': 'pointer',
    ':focus': {
      outline: 'none',
      borderWidth: '4px',
      borderColor: globalVars.color['focus-yellow']
    },
    'selectors': {
      '&[aria-invalid=true]': {
        borderColor: globalVars.color['error-1']
      },
      '&[aria-disabled=true], &:disabled': {
        color: globalVars.color['solid-grey-420'],
        backgroundColor: globalVars.color['solid-grey-50'],
        cursor: 'default'
      }
    }
  }),
  selectIcon: style({
    position: 'absolute',
    top: '20px',
    right: '16px',
    width: '16px',
    height: '16px'
  }),
  colorVariants: styleVariants({
    default: { color: globalVars.color['solid-grey-900'] },
    disabled: { color: globalVars.color['solid-grey-420'] }
  })
}
