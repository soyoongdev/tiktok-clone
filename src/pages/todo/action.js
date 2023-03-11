import constant from '../../constant/constant'

const setThemeAction = payload => {
  return {
    type: constant.THEME_SETTING,
    theme: payload ? 'dark' : 'light'
  }
}

export { setThemeAction }
