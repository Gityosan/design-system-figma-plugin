// エラーメッセージとエラーモーダルの表示オンオフの管理
export const useErrorState = () => {
  const existError = useState<boolean>('existError', () => false)
  const errorMessages = useState<string[]>('errorMessages', () => [])
  const setExistError = (existError: Ref<boolean>) => (v: boolean) => {
    existError.value = v
  }
  const setErrorMessages = (errorMessages: Ref<string[]>) => (v: string[]) => {
    errorMessages.value = v
  }
  const addErrorMessages = (errorMessages: Ref<string[]>) => (v: string) => {
    errorMessages.value.push(v)
  }
  return {
    existError: readonly(existError),
    errorMessages: readonly(errorMessages),
    setExistError: setExistError(existError),
    setErrorMessages: setErrorMessages(errorMessages),
    addErrorMessages: addErrorMessages(errorMessages)
  }
}
// ineditableなど編集状態の管理
export const useEditState = () => {
  const ineditable = useState<boolean>('ineditable', () => false)
  const setIneditable = (ineditable: Ref<boolean>) => (v: boolean) => {
    ineditable.value = v
  }
  return {
    ineditable: readonly(ineditable),
    setIneditable: setIneditable(ineditable)
  }
}
