import { defineProperties, createSprinkles } from '@vanilla-extract/sprinkles'
import { recipe } from '@vanilla-extract/recipes'
import { style } from '@vanilla-extract/css'
import { globalVars } from './globalTheme.css'

const typographyProperties = defineProperties({
  properties: {
    fontSize: globalVars.fontSize,
    fontWeight: globalVars.fontWeight,
    lineHeight: globalVars.lineHeight,
    letterSpacing: globalVars.letterSpacing
  }
})

export const typographySprinkles = createSprinkles(typographyProperties)

export const textStyle = recipe({
  base: style([
    {
      fontFamily: 'Noto Sans JP, sans-serif',
      color: globalVars.color['solid-grey-800']
    }
  ]),
  variants: {
    variant: {
      heading1: [
        typographySprinkles({ fontSize: 'heading_lg', lineHeight: 'level_4', fontWeight: 'normal' }),
        { paddingTop: '64px', paddingBottom: '24px' }
      ],
      heading2: [
        typographySprinkles({ fontSize: 'heading_md', lineHeight: 'level_5', fontWeight: 'normal', letterSpacing: 'base' }),
        { paddingTop: '64px', paddingBottom: '24px' }
      ],
      heading3: [
        typographySprinkles({ fontSize: 'heading_sm', lineHeight: 'level_5', fontWeight: 'normal', letterSpacing: 'base' }),
        { paddingTop: '40px', paddingBottom: '24px' }
      ],
      heading4: [
        typographySprinkles({ fontSize: 'heading_xs', lineHeight: 'level_5', fontWeight: 'normal', letterSpacing: 'base' }),
        { paddingTop: '40px', paddingBottom: '16px' }
      ],
      heading5: [
        typographySprinkles({ fontSize: 'heading_xxs', lineHeight: 'level_5', fontWeight: 'normal', letterSpacing: 'base' }),
        { paddingTop: '40px', paddingBottom: '16px' }
      ],
      body_l: [
        typographySprinkles({ fontSize: 'body_l', lineHeight: 'level_7', fontWeight: 'normal', letterSpacing: 'base' })
      ],
      body_m: [
        typographySprinkles({ fontSize: 'body_m', lineHeight: 'level_7', fontWeight: 'normal', letterSpacing: 'base' })
      ],
      label_l: [
        typographySprinkles({ fontSize: 'label_l', lineHeight: 'level_5', fontWeight: 'medium', letterSpacing: 'base' })
      ],
      label_m: [
        typographySprinkles({ fontSize: 'label_m', lineHeight: 'level_5', fontWeight: 'medium', letterSpacing: 'base' })
      ],
      caption_l: [
        typographySprinkles({ fontSize: 'caption_l', lineHeight: 'level_7', fontWeight: 'normal', letterSpacing: 'tight' })
      ],
      caption_m: [
        typographySprinkles({ fontSize: 'caption_m', lineHeight: 'level_7', fontWeight: 'normal', letterSpacing: 'tight' })
      ],
      button: [
        typographySprinkles({ fontSize: 'button', lineHeight: 'level_5', fontWeight: 'bold', letterSpacing: 'base' })
      ],
      button_icon: {
        height: '24px',
        width: '24px'
      }
    }
  },
  defaultVariants: {
    variant: 'body_l'
  }
})

export type TextStyleVariants = NonNullable<Parameters<typeof textStyle>[0]>
