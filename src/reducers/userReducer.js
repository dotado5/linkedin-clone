import { Set_USER } from "../actions/actionType"

const INITIAL_STATE = {
  user: null,
}

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Set_USER:
      return {
        ...state,
        user: action.user,
      }

    default:
      return state
  }
}

export default userReducer
