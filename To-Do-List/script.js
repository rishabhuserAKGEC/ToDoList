// Select necessary DOM elements
const input = document.querySelector('input');
const button = document.querySelector('.input-container > button');
const container = document.querySelector('.container');

// Function to add a new to-do item
function addTodo() {
    const todoText = input.value.trim();

    if (todoText === '') return; // Prevent adding empty to-do items

    // Create new elements for the to-do item
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    const todoP = document.createElement('p');
    todoP.textContent = todoText;

    const actionsDiv = document.createElement('div');
    actionsDiv.classList.add('actions');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';

    // Add event listener for delete button
    deleteButton.addEventListener('click', () => {
        todoDiv.remove();
    });

    // Append the elements to the DOM
    actionsDiv.appendChild(checkbox);
    actionsDiv.appendChild(deleteButton);
    todoDiv.appendChild(todoP);
    todoDiv.appendChild(actionsDiv);
    container.appendChild(todoDiv);

    // Clear the input field
    input.value = '';
}

// Event listener for the "+" button to add a to-do item
button.addEventListener('click', addTodo);

// Allow pressing Enter key to add a to-do item
input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTodo();
    }
});
