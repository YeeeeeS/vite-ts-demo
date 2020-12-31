interface userType {
  name?: string,
  avatar?: string
}
export interface State {
  title: string,
  userInfo: userType
}

export const state: State = {
  title: 'Vite',
  userInfo: {}
}