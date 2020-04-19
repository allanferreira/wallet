export default (state = true, { type, value }) => {
  let newState

  switch (type) {
    case '@formLogin/SET':
        newState = value
        break
    default:
        newState = state
        break
  }

  return newState
}
