import constant from '~/constant/constant'

const initState = {
  theme: 'light'
}

const reducer = (state, action) => {
  switch (action.type) {
    case constant.THEME_SETTING:
      return {
        theme: action.theme
      }
  }
}

export { initState }
export default reducer
