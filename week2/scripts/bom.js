const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('______');
const li = dococument.createElement('li');
const deleteButton = document.createElement('button');
li.textContent = input.value;
deleteButton.textContent = '❌';
li.append(deleteButton);
list.append(li);
button.addEventListener('Click', function () { if (input.value.trim() !== ' ') { } });
deleteButton.addEventListener('click', function () {
    list.removeChild(li);
    input.focus();
});
input.value = '';
input.focus();