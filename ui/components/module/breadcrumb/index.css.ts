import { style } from '@vanilla-extract/css'

export const styles = {
  container: style({
    height: '24px',
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'center',
    gap: '8px'
  }),
  homeIcon: style({
    marginRight: '4px'
  })
}
