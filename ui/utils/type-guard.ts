import R from 'remeda'

export const isFile = (v: unknown): v is File => v instanceof File
export const isEmptyObject = (v: unknown): v is Record<string, unknown> =>
  R.isPlainObject(v) && R.isEmpty(v)
