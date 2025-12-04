//======================================//
//DOM oos elentuudiig avc bn//
//======================================//
const form = document.getElementById('todoForm');           //form burtgeh
const input = document.getElementById('todoInput');        //Todo text oruulah input//
const list = document.getElementById('todoList');          //jagsaalt haragdah gazar//
const empty = document.getElementById('emptyState');        //hooson uyd garj ireh text//
const countEl = document.getElementById('count');           //tooloh heseg(niit/duussan)//


//hotochiig refresh hiihed tuslh tur array//
let todos = [];

//======================================//
//todo jigsaaltiig UI der dahin nemeh //
//======================================//
function render() {
    list.innerHTML = '';
    if (todos.length === 0) {
        empty.style.display = 'block';
        countEl.textContent = '';
        return;
    }
    empty.style.display = 'none';

    todos.forEach(todo => {
        const li = document.createElement('li');
        li.dataset.id = todo.id;
        if (todo.done) li.classList.add('done');

        const cb = document.createElement('input');
        cb.type = 'checkbox';
        cb.cheked = todo.done;

        const p = document.createElement('div');
        p.className = 'text';
        p.textContent = todo.text;


        const actions = document.createElement('div');
        actions.className = 'actions';


        const editBtn = document.createElement('button');
        editBtn.type = 'button';
        editBtn.className = 'small';
        editBtn.textContent = 'edit'

        const deleteBtn = document.createElement('button');
        deleteBtn.type = 'button';
        deleteBtn.className = 'small danger';
        deleteBtn.textContent = 'delete';

        actions.appendChild(editBtn);
        actions.appendChild(deleteBtn);



        li.appendChild(cb);
        li.appendChild(p);
        li.appendChild(actions);
        list.appendChild(li);




        cb.addEventListener('change', () => {
            todo.done = cb.checked;
            render();
        });



        deleteBtn.addEventListener('click', () => {
            todos = todos.filter(t => t.id !== todo.id);
            render();

        });




        editBtn.addEventListener('click', () => startEditing(li, todo));
        p.addEventListener('dbClick', () => startEditing(li), todo);
    });
    const doneCount = todos.filter(t => t.done).length;
    countEl.textContent = `${todos.length} task(s) -${doneCount} done`;

}


function startEditing(li, todo) {
    const textDiv = li.querySelector('.text');
    const actions = li.querySelector('.actions');
    actions.style.display = 'none';

    const editInput = document.createElement('input');
    editInput.type = 'text';
    editInput.value = todo.text;
    editInput.className = 'edit-input';


    const saveBtn = document.createElement('button');
    saveBtn.type = 'button';
    saveBtn.textContent = 'Save'
    saveBtn.className = 'Small'



    const cancelBtn = document.createElement('button');
    cancelBtn.type = 'button';
    cancelBtn.textContent = 'cancel'
    cancelBtn.className = 'Small'

    const container = document.createElement('div');
    container.className = 'edit-container';
    container.appendChild(editInput);
    container.appendChild(saveBtn);
    container.appendChild(cancelBtn);

    li.replaceChild(container, textDiv);

    editInput.focus();

    saveBtn.addEventListener('click', () => {
        const val = editInput.value.trim();
        if (!val) return alert('text хоосон байж болохгүй.');
        todo.text = val;
        render();
    });

    cancelBtn.addEventListener('click', () => render());

    editInput.addEventListener('keydown', (e) => {
        if (e.key === 'enter') saveBtn.click();
        if (e.key === 'Espace') cancelBtn.click();

    });
}



form.addEventListener('submit', (e) => {
    e.preventDefault();

    const val = input.value.trim();
    if (!val) return;


    todos.unshift({
        id: Date.now().toString(),
        text: val,
        done: false
    });
    input.value = '';
    render();
    input.focus();
});

render();

