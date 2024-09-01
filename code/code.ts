/// <reference types="@figma/plugin-typings" />
function hexToRgb(hex: string): RGB {
  hex = hex.replace('#', '')
  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2]
  }
  const r = parseInt(hex.slice(0, 2), 16) / 255
  const g = parseInt(hex.slice(2, 4), 16) / 255
  const b = parseInt(hex.slice(4, 6), 16) / 255
  return { r, g, b }
}

async function createColorRectangles(colorCodes: string[]) {
  await figma.loadFontAsync({ family: 'Inter', style: 'Regular' })

  const section = figma.createFrame()
  section.name = 'Color Palette'
  section.fills = [
    {
      type: 'SOLID',
      color: { r: 1, g: 1, b: 1 },
      opacity: 1,
      blendMode: 'NORMAL',
      visible: true,
      boundVariables: {}
    } as SolidPaint
  ]

  const maxColumns = 6
  const columns
    = colorCodes.length < maxColumns ? colorCodes.length : maxColumns
  const padding = 20
  const boxSize = 100
  const textHeight = 20
  const boxSpacing = 20

  colorCodes.forEach((color, index) => {
    const col = index % columns
    const row = Math.floor(index / columns)

    const rect = figma.createRectangle()
    rect.x = col * (boxSize + boxSpacing) + boxSpacing
    rect.y = row * (boxSize + textHeight + boxSpacing) + boxSpacing
    rect.resize(boxSize, boxSize)
    rect.fills = [
      {
        type: 'SOLID',
        color: hexToRgb(color),
        opacity: 1,
        blendMode: 'NORMAL',
        visible: true,
        boundVariables: {}
      } as SolidPaint
    ]

    const text = figma.createText()
    text.characters = color
    text.fontSize = 14
    text.x = rect.x
    text.y = rect.y + boxSize + 5
    text.fills = [
      {
        type: 'SOLID',
        color: { r: 0, g: 0, b: 0 },
        opacity: 1,
        blendMode: 'NORMAL',
        visible: true,
        boundVariables: {}
      } as SolidPaint
    ]

    section.appendChild(rect)
    section.appendChild(text)
  })

  const totalWidth
    = columns * (boxSize + boxSpacing) + padding * 2 - boxSpacing
  const totalHeight
    = Math.ceil(colorCodes.length / columns)
    * (boxSize + textHeight + boxSpacing)
    + padding * 2
    - boxSpacing
  section.resize(totalWidth, totalHeight)

  // 現在のビューポートの中心を取得
  const center = figma.viewport.center

  // セクションの位置を中央に設定
  section.x = center.x - section.width / 2
  section.y = center.y - section.height / 2

  figma.currentPage.appendChild(section)

  // 選択状態を更新
  figma.currentPage.selection = [section]
}

// メインのコード
figma.showUI(__html__, { width: 450, height: 500 })

figma.ui.onmessage = async (msg) => {
  if (msg.type === 'generate-palette') {
    await createColorRectangles(msg.colors)
    figma.closePlugin()
  }
}
