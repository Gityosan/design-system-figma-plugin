import { style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'
import { textStyle, globalVars } from '@/assets/styles'

export const styles = {
  content: style({
    whiteSpace: 'nowrap', /* 折り返し無しにする */
    overflow: 'hidden', /* はみ出た部分を非表示 */
    textOverflow: 'ellipsis' /* 語尾を3点リーダーに */
  }),
  loadingIcon: style({
    height: '100%',
    width: '100%'
  })
}
export const buttonStyle = recipe({
  base: style([
    textStyle({ variant: 'button' }),
    {
      border: 'none',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: globalVars.borderRadius.small,
      maxWidth: '100%',
      gap: '4px',
      selectors: {
        '&[aria-disabled=true]': {
          cursor: 'pointer'
        }
      }
    }
  ]),
  variants: {
    variant: {
      primary: {
        'backgroundColor': globalVars.color['blue-900'],
        'color': globalVars.color.white,
        ':hover': {
          backgroundColor: globalVars.color['blue-1000']
        },
        ':active': {
          backgroundColor: globalVars.color['blue-1100']
        },
        ':focus': {
          backgroundColor: globalVars.color['blue-900']
        },
        'selectors': {
          '&[aria-disabled=true], &:disabled': {
            backgroundColor: globalVars.color.black,
            opacity: '0.3',
            textDecoration: 'none',
            cursor: 'default'
          }
        }
      },
      secondary: {
        'backgroundColor': globalVars.color.white,
        'color': globalVars.color['blue-900'],
        'borderWidth': '1px',
        'borderStyle': 'solid',
        'borderColor': globalVars.color['blue-900'],
        ':hover': {
          color: globalVars.color['blue-1000'],
          borderColor: globalVars.color['blue-1000'],
          backgroundColor: globalVars.color['blue-200']
        },
        ':active': {
          color: globalVars.color['blue-1200'],
          borderColor: globalVars.color['blue-1200'],
          backgroundColor: globalVars.color['blue-300']
        },
        ':focus': {
          color: globalVars.color['blue-900'],
          borderColor: globalVars.color['blue-900'],
          backgroundColor: globalVars.color.white
        },
        'selectors': {
          '&[aria-disabled=true], &:disabled': {
            color: globalVars.color['solid-grey-420'],
            borderColor: globalVars.color['solid-grey-420'],
            backgroundColor: globalVars.color.white,
            textDecoration: 'none',
            cursor: 'default'
          }
        }
      },
      tertiary: {
        'backgroundColor': globalVars.color.transparent,
        'color': globalVars.color['blue-900'],
        ':hover': {
          color: globalVars.color['blue-1000'],
          borderColor: globalVars.color['blue-1000'],
          backgroundColor: globalVars.color['blue-200']
        },
        ':active': {
          color: globalVars.color['blue-1200'],
          borderColor: globalVars.color['blue-1200'],
          backgroundColor: globalVars.color['blue-300']
        },
        ':focus': {
          color: globalVars.color['blue-900'],
          borderColor: globalVars.color['blue-900'],
          backgroundColor: globalVars.color.transparent
        },
        'selectors': {
          '&[aria-disabled=true], &:disabled': {
            color: globalVars.color['solid-grey-420'],
            borderColor: globalVars.color['solid-grey-420'],
            backgroundColor: globalVars.color.transparent,
            textDecoration: 'none',
            cursor: 'default'
          }
        }
      }
    },
    size: {
      'large': {
        padding: '16px',
        minWidth: '136px',
        height: '56px',
        borderRadius: '12px'
      },
      'medium': {
        padding: '12px 26px',
        minWidth: '96px',
        height: '48px',
        borderRadius: '8px'
      },
      'small': {
        padding: '8px 12px',
        minWidth: '80px',
        height: '36px',
        borderRadius: '6px'
      },
      'x-small': {
        padding: '7px 8px',
        minWidth: '72px',
        height: '28px',
        borderRadius: '4px'
      }
    }
  },
  defaultVariants: {
    variant: 'primary',
    size: 'large'
  }
})
export type ButtonStyleVariants = NonNullable<Parameters<typeof buttonStyle>[0]>
