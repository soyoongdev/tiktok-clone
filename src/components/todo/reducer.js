import { SET_JOB, ADD_JOB, EDIT_JOB, DELETE_JOB, DELETE_ALL_JOBS } from './constant'

export const initValue = {
  job: '',
  jobs: []
}

const reducer = (state, action) => {
  switch (action.type) {
    case SET_JOB:
      return {
        ...state,
        job: action.payload
      }
    case ADD_JOB:
      return {
        ...state,
        jobs: [...state.jobs, action.payload]
      }
    case EDIT_JOB:
      const job = state.jobs.splice(action.index, 1)
      return {
        job: job,
        jobs: [...state.jobs]
      }
    case DELETE_JOB:
      state.jobs.splice(action.index, 1)
      return {
        job: state.job,
        jobs: [...state.jobs]
      }
    // case DELETE_ALL_JOBS:
    //   return state
    default:
      throw new Error(`Invalid action ${action}`)
  }
}

export default reducer
