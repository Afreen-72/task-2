// Newsletter Form Validation
const newsletterForm = document.getElementById('newsletter-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');

newsletterForm.addEventListener('submit', (event) => {
    let isValid = true;

    if (nameInput.value.trim() === '') {
        nameError.classList.add('show');
        isValid = false;
    } else {
        nameError.classList.remove('show');
    }

    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!emailRegex.test(emailInput.value.trim())) {
        emailError.classList.add('show');
        isValid = false;
    } else {
        emailError.classList.remove('show');
    }

    if (!isValid) {
        event.preventDefault(); // Prevent form submission if validation fails
    } else {
        alert("Thanks for subscribing to The Beauty Handbook!"); //moved alert here
    }
});

nameInput.addEventListener('input', () => {
    nameError.classList.remove('show');
});

emailInput.addEventListener('input', () => {
    emailError.classList.remove('show');
});

// To-Do List
const todoInput = document.getElementById('todo-input');
const addTodoButton = document.getElementById('add-todo-button');
const todoList = document.getElementById('todo-list');

function addTodoItem() {
    const todoText = todoInput.value.trim();

    if (todoText !== '') {
        const listItem = document.createElement('li');
        const span = document.createElement('span');
        span.textContent = todoText;
        listItem.appendChild(span);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete-todo-button';
        deleteButton.addEventListener('click', () => {
            listItem.remove();
        });

        listItem.appendChild(deleteButton);
        todoList.appendChild(listItem);
        todoInput.value = ''; // Clear the input
    }
}

addTodoButton.addEventListener('click', addTodoItem);

todoInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        addTodoItem();
    }
});

// Image Gallery
const imageUpload = document.getElementById('image-upload');
const uploadImageButton = document.getElementById('upload-image-button');
const imageGallery = document.getElementById('image-gallery');

uploadImageButton.addEventListener('click', () => {
    imageUpload.click(); // Trigger file input click
});

imageUpload.addEventListener('change', () => {
    const file = imageUpload.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = (event) => {
            const listItem = document.createElement('li');
            const img = document.createElement('img');
            img.src = event.target.result;
            img.alt = 'Uploaded Image';
            listItem.appendChild(img);

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.className = 'delete-image-button';
            deleteButton.addEventListener('click', () => {
                listItem.remove();
            });

            listItem.appendChild(deleteButton);
            imageGallery.appendChild(listItem);
            imageUpload.value = ''; // Clear the input
        };

        reader.readAsDataURL(file);
    }
});

