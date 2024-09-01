import R from 'remeda'
import { isFile } from '@/utils/type-guard'

export const toSnakeCase = (str: string): string => {
  return str
    .replace(/[-\s]/g, '_')
    .replace(/([a-z])([A-Z])/g, '$1_$2')
    .toLowerCase()
}

// toLowerCamelCase = R.toCamelCase
// toUpperCamelCase = toPascalCase
export const toPascalCase = (str: string): string => {
  return R.capitalize(R.toCamelCase(str))
}

export const convertKeyToSnakeCase = <T = unknown>(obj: T): any => {
  if (obj === null || obj === undefined) return {}
  if (R.isDate(obj) || isFile(obj)) return obj
  if (Array.isArray(obj)) return obj.map(convertKeyToSnakeCase)
  if (R.isPlainObject(obj)) {
    return Object.keys(obj).reduce(
      (acc, key) => {
        if (obj[key] === null || obj[key] === undefined) return acc
        const newKey = toSnakeCase(key)
        acc[newKey] = convertKeyToSnakeCase(obj[key])
        return acc
      },
      {} as Record<string, unknown>
    )
  }
  return obj
}

export const convertKeyToCamelCase = <T = unknown>(obj: T): any => {
  if (obj === null || obj === undefined) return {}
  if (R.isDate(obj) || isFile(obj)) return obj
  if (Array.isArray(obj)) return obj.map(convertKeyToCamelCase)
  if (R.isPlainObject(obj)) {
    return Object.keys(obj).reduce(
      (acc, key) => {
        if (obj[key] === null || obj[key] === undefined) return acc
        const newKey = R.toCamelCase(key)
        acc[newKey] = convertKeyToCamelCase(obj[key])
        return acc
      },
      {} as Record<string, unknown>
    )
  }
  return obj
}

export const convertKeyToPascalCase = <T = unknown>(obj: T): any => {
  if (obj === null || obj === undefined) return {}
  if (R.isDate(obj) || isFile(obj)) return obj
  if (Array.isArray(obj)) return obj.map(convertKeyToPascalCase)
  if (R.isPlainObject(obj)) {
    return Object.keys(obj).reduce(
      (acc, key) => {
        if (obj[key] === null || obj[key] === undefined) return acc
        const newKey = toPascalCase(key)
        acc[newKey] = convertKeyToPascalCase(obj[key])
        return acc
      },
      {} as Record<string, unknown>
    )
  }
  return obj
}
