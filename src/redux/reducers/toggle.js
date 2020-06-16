const initialState = {
  value: false
}

const toggle = (state=initialState, action) => {
  switch(action.type) {
    case 'TOGGLE' : {
      return {
        ...initialState,
        value: !state.value
      }
      break
    }
    default: {
      return {
        ...state
      }
    }
  }
}

export default toggle