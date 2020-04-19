export default (state = [], { type, value }) => {
    let newState
  
    switch (type) {
      case '@products/SET':
          newState = value
          break
      case '@products/ADD':
          newState = [value, ...state]
          break
      default:
          newState = state
          break
    }
  
    return newState
  }
  