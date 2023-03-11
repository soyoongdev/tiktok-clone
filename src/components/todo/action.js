import * as jobConstant from './constant'

export const setJobAction = payload => {
  return {
    type: jobConstant.SET_JOB,
    payload
  }
}

export const addJobAction = payload => {
  return {
    type: jobConstant.ADD_JOB,
    payload
  }
}

export const editJobAction = index => {
  return {
    type: jobConstant.EDIT_JOB,
    index
  }
}

export const deleteJobAction = index => {
  return {
    type: jobConstant.DELETE_JOB,
    index
  }
}

export const deleteAllJobAction = payload => {}
