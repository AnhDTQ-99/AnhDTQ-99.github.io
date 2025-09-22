(() => {
    const STORAGE_KEY = 'todo.tasks.v1.bootstrap';

  /** ---------------- State ---------------- */
  /** @type {{id:string, text:string, completed:boolean, createdAt:number}[]} */
let tasks = load() || [];
let filter = 'all'; // 'all' | 'active' | 'completed'

  /** ---------------- DOM ---------------- */
const $ = (s) => document.querySelector(s);
const $$ = (s) => Array.from(document.querySelectorAll(s));

const elInput = $('#newTodo');
const elAdd = $('#addBtn');
const elList = $('#list');
const elCount = $('#count');
const elTabs = $$('#filterTabs .nav-link');
const elClearCompleted = $('#clearCompletedBtn');
const elClearAll = $('#clearAllBtn');

  /** ---------------- Utils ---------------- */
const uid = () => Math.random().toString(36).slice(2, 10) + Date.now().toString(36);

function save() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}
function load() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        return raw ? JSON.parse(raw) : null;
    } catch { return null; }
}
const escapeHtml = (s) =>
    s.replace(/[&<>"']/g, (m) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]));

/** ---------------- CRUD ---------------- */
function addTask(text) {
    const t = text.trim();
    if (!t) return;
    tasks.unshift({ id: uid(), text: t, completed: false, createdAt: Date.now() });
    save(); render();
}
function toggleTask(id) {
    const item = tasks.find(t => t.id === id);
    if (!item) return;
    item.completed = !item.completed;
    save(); render();
}
function deleteTask(id) {
    tasks = tasks.filter(t => t.id !== id);
    save(); render();
}
function clearCompleted() {
    tasks = tasks.filter(t => !t.completed);
    save(); render();
}
function clearAll() {
    if (!tasks.length) return;
    if (confirm('Delete ALL tasks?')) {
    tasks = [];
    save(); render();
    }
}

  /** ---------------- Filter + Render ---------------- */
function setFilter(next) {
    filter = next;
    elTabs.forEach(tab => tab.classList.toggle('active', tab.dataset.filter === filter));
    render();
}

function getVisible() {
    if (filter === 'active') return tasks.filter(t => !t.completed);
    if (filter === 'completed') return tasks.filter(t => t.completed);
    return tasks;
}

function render() {
    const visible = getVisible();
    elList.innerHTML = '';

    if (!visible.length) {
        const empty = document.createElement('div');
        empty.className = 'empty';
        empty.textContent = 'Nothing here. Add a task ✨';
        elList.appendChild(empty);
    } else {
        for (const t of visible) {
        const item = document.createElement('div');
        item.className = 'list-group-item d-flex align-items-center justify-content-between ' +
                        (t.completed ? 'completed' : '');
        item.dataset.id = t.id;

        item.innerHTML = `
            <div class="form-check d-flex align-items-center gap-2 m-0">
                <input class="form-check-input" type="checkbox" ${t.completed ? 'checked' : ''} />
                <label class="form-check-label todo-label">${escapeHtml(t.text)}</label>
            </div>
            <div class="actions">
                <button class="btn btn-outline-danger btn-sm" data-action="delete" title="Delete">
                <span aria-hidden="true">🗑️</span>
            </button>
            </div>
        `;
        elList.appendChild(item);
        }
    }

    // Footer
elCount.textContent = `${tasks.length} item${tasks.length !== 1 ? 's' : ''}`;
const completedCount = tasks.filter(t => t.completed).length;
elClearCompleted.textContent = `Delete all completed (${completedCount})`;
elClearCompleted.classList.toggle('d-none', !(filter === 'completed' && completedCount));
}

/** ---------------- Events ---------------- */
elAdd.addEventListener('click', () => {
    addTask(elInput.value);
    elInput.value = '';
    elInput.focus();
});
elInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        addTask(elInput.value);
        elInput.value = '';
    }
});

elTabs.forEach(tab => tab.addEventListener('click', () => setFilter(tab.dataset.filter)));

  // Event delegation for list
elList.addEventListener('click', (e) => {
    const row = e.target.closest('.list-group-item');
    if (!row) return;
    const id = row.dataset.id;

    if (e.target.matches('.form-check-input')) {
        toggleTask(id);
    } else if (e.target.closest('[data-action="delete"]')) {
        deleteTask(id);
    }
});

elClearCompleted.addEventListener('click', () => {
    if (confirm('Delete all completed tasks?')) clearCompleted();
});
elClearAll.addEventListener('click', clearAll);

  // Initial render
render();
})();
