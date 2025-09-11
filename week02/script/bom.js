const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');


// Create an Click Event Listener
button.addEventListener('click', function () { 

    if (input.value.trim() !== '') { 
        // 1. Create a new list item and a delete button for this specific item
        const li = document.createElement('li');
        const deleteButton = document.createElement('button'); // This was originally named 'Delete', but 'deleteButton' is used below

        // 2. Populate the list item with the user's input
        li.textContent = input.value;

        // 3. Populate the delete button with the '❌'
        deleteButton.textContent = '❌';

        // 4. Append the delete button to the new list item
        li.append(deleteButton);

        // 5. Append the new list item to the unordered list
        list.append(li);

        // 6. Add the event listener to the NEWLY CREATED delete button
        deleteButton.addEventListener('click', function () { 
            list.removeChild(li);
            input.focus();
        });

        // 7. Clear the input field
        input.value = '';
    }

    // 8. Put the cursor back in the input field regardless of whether something was added
    input.focus();
});



