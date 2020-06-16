export const toggleModal = () => {
  return {
    type: 'TOGGLE'
  }
}
export const addTodo = (text) => ({
  type: 'ADD_TODO',
  value: {
    text: text,
  }
})
export const deleteTodo = (index) => {
  return {
    type: 'DELETE',
    payload: index
  }
}