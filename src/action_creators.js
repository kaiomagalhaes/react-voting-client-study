export function setState(state) {
  return {
    type: 'SET_STATE',
    state
  };
}

export function vote(entry) {
  console.log('vote', entry)
  return {
    type: 'VOTE',
    entry
  };
}
