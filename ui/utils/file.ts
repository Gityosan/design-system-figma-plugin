import { pipe, string, url, safeParse } from 'valibot'

const urlSchema = pipe(string(), url('This url is invalid format.'))
export const typeSafetyFileUrl = (file?: File | string | null): string => {
  if (!file) return ''
  else if (typeof file === 'string') {
    return safeParse(urlSchema, file).success ? file : ''
  }
  else if (file instanceof File) return URL.createObjectURL(file)
  else return ''
}
