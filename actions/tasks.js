import React from 'react'
import createReactFactory from 'create-react-factory'


export const addTask = (todo) => {
  return {
    type: types.ADD_TASK,
    payload: todo
  }
}
export const ADD_TASK = createReactFactory(ADD_TASK)

export const removeTask = (id) => {
  return {
    type: types.REMOVE_TASK,
    payload: { id }
  }
}

export const REMOVE_TASK = createReactFactory(REMOVE_TASK)


export const completeTask = (id) => {
  return {
    type: types.COMPLETE_TASK,
    payload: { id }
  }
}
export const COMPLETE_TASK = createReactFactory(COMPLETE_TASK)
