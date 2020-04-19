export default (state = 'R$ 0,00', { type, value }) => {
    let newState
  
    switch (type) {
      case '@wallet/SET':
          newState = value
          break
      default:
          newState = state
          break
    }
  
    return newState
  }
  