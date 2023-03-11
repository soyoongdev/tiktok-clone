import { useReducer, useRef } from 'react'
import './todoApp.css'
import reducer, { initValue } from './reducer'
import { setJobAction, addJobAction, editJobAction, deleteJobAction, deleteAllJobAction } from './action'
// 1. Initialize values = 0
// 2. Actions: increaseAction(state + 1) / decreaseAction(state - 1)
// 3. Reducer
// 4. Dispatch

function ToDoApp() {
  const [state, dispatch] = useReducer(reducer, initValue)
  const { job, jobs } = state
  const inputRef = useRef()

  const handleAddJob = () => {
    dispatch(addJobAction(job))
    dispatch(setJobAction(''))
    inputRef.current.focus()
  }

  const handleEditJob = index => {
    dispatch(editJobAction(index))
    inputRef.current.focus()
  }

  return (
    <div className="container">
      <div className="group-action">
        <input
          className="input-form"
          ref={inputRef}
          value={job}
          placeholder="Add jobs.."
          onChange={even => {
            dispatch(setJobAction(even.target.value))
          }}
        />
        <button className="btn-action" onClick={handleAddJob}>
          Add
        </button>
      </div>

      <ul>
        {jobs.map((job, index) => {
          return (
            <div key={index} style={{ padding: 8 }}>
              <li>
                {job}
                <button onClick={() => handleEditJob(index)}>Edit</button>
                <button onClick={() => dispatch(deleteJobAction(index))}>Delete</button>
              </li>
            </div>
          )
        })}
      </ul>
    </div>
  )
}

export default ToDoApp
