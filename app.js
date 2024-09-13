const todoInput = document.querySelector('#todoinput')
const todoButton = document.querySelector('#todobutton')
const todoItemList = document.querySelector('#todo__items--list')

function addTodo() {
  const itemValue = todoInput.value.trim()
  createElements(itemValue)
  clearInput()
}

function createElements(itemName) {
  const listItem = document.createElement('li')
  listItem.textContent = itemName
  todoItemList.appendChild(listItem)
  const deleteButton = document.createElement('button')
  deleteButton.classList.add('delete')
  deleteButton.textContent = 'Radera'

  listItem.appendChild(deleteButton)
  deleteButton.addEventListener('click', () => {
    deleteItem(listItem)
  })
}

todoButton.addEventListener('click', addTodo)

function clearInput() {
  todoInput.value = ''
}

function deleteItem(listItem) {
  todoItemList.removeChild(listItem)
}
