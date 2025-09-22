//AUTH PROCESSED

const FIXED_USER = { username: 'anhdtq', password: '123' };

// Check auth state on load
window.addEventListener('DOMContentLoaded', () => {
    hydrateRememberedUsername();
    if (isAuthenticated()) {
        showApp();
    } else {
        showLogin();
    }
    });

// Return username if logged in, falsey otherwise
function isAuthenticated() {
    // If Remember me -> localStorage; else sessionStorage
    return localStorage.getItem('authUser') || sessionStorage.getItem('authUser');
}

function showLogin() {
    document.getElementById('loginSection').style.display = 'block';
    document.getElementById('appSection').style.display = 'none';
}

function showApp() {
    document.getElementById('loginSection').style.display = 'none';
    document.getElementById('appSection').style.display = 'block';
    const user = isAuthenticated();
    document.getElementById('welcomeUser').textContent = `Hello, ${user}`;

    loadStudents();

    const lastQuery = localStorage.getItem('lastSearchQuery') || '';
    if (lastQuery) {
    document.getElementById('searchInput').value = lastQuery;
    searchStudent();
    } else {
    const searchEl = document.getElementById('searchInput');
    if (searchEl) searchEl.value = '';
    renderStudents();
    }
}

// Prefill username if remembered
function hydrateRememberedUsername() {
    const remembered = localStorage.getItem('rememberedUsername') || '';
    const input = document.getElementById('loginUsername');
    if (input && remembered) {
    input.value = remembered;
    document.getElementById('rememberMe').checked = true;
    }
}

function handleLogin() {
    const u = document.getElementById('loginUsername').value.trim();
    const p = document.getElementById('loginPassword').value;

    const error = document.getElementById('loginError');
    error.style.display = 'none';

    // Fixed credentials check
    if (u === FIXED_USER.username && p === FIXED_USER.password) {
    const remember = document.getElementById('rememberMe').checked;

    if (remember) {
        localStorage.setItem('authUser', u);
        localStorage.setItem('rememberedUsername', u);
        sessionStorage.removeItem('authUser');
    } else {
        sessionStorage.setItem('authUser', u);
        localStorage.removeItem('authUser');
    }

    showApp();
    } else {
    error.style.display = 'block';
    }
}

function handleLogout() {
    localStorage.removeItem('authUser');
    sessionStorage.removeItem('authUser');
    localStorage.removeItem('lastSearchQuery');

    const searchEl = document.getElementById('searchInput');
    if (searchEl) searchEl.value = '';

    currentPage = 1;
    editingIndex = -1;

    showLogin();
}

//MANGAGEMENT SCREEN PROCESSED

let students = []; // List of students
let editingIndex = -1; // Track if editing
let currentQuery = '';       // normalized search text
const perPage = 5;
let currentPage = 1;


// Persist to localStorage
function saveStudents() {
    localStorage.setItem('students', JSON.stringify(students));
}

// Load from localStorage (if any)
function loadStudents() {
    try {
        const raw = localStorage.getItem('students');
        students = raw ? JSON.parse(raw) : [];
    } catch {
    students = [];
    }
}

function getActiveList() {
    const q = currentQuery?.trim().toLowerCase() || '';
    if (!q) return students;
    return students.filter(s =>
        s.name.toLowerCase().includes(q) ||
        s.id.toLowerCase().includes(q) ||
        s.gender.toLowerCase().includes(q) ||
        s.math.toString().includes(q) ||
        s.english.toString().includes(q) ||
        s.literature.toString().includes(q) ||
        s.avg.toString().includes(q)
    );
}

function clampPageToList(list) {
    const totalPages = Math.max(1, Math.ceil(list.length / perPage));
    if (currentPage > totalPages) currentPage = totalPages;
}

//Create/Update student
function createOrUpdateStudent() {
    const id = document.getElementById('id').value.trim();
    const name = document.getElementById('name').value.trim();
    const gender = document.getElementById('gender').value.trim();

    const mathStr = document.getElementById('math').value;
    const englishStr = document.getElementById('english').value;
    const literatureStr = document.getElementById('literature').value;

    if ([id.trim(), name.trim(), gender, mathStr, englishStr, literatureStr].some(v => v === '')) {
    alert("Please input all the fields");
    return;
    }

    const math = Number(mathStr);
    const english = Number(englishStr);
    const literature = Number(literatureStr);

    if ([math, english, literature].some(n => n < 0 || n > 10)) {
    alert("Scores must be between 0 and 10.");
    return;
    }

    const avg = ((math + english + literature) / 3).toFixed(1);
    const student = { id, name, gender, math, english, literature, avg };

    if (editingIndex >= 0) {
    students[editingIndex] = student;
    editingIndex = -1;
    } else {
    students.push(student);
    }

    saveStudents();
    clearForm();
    clampPageToList(getActiveList());
    renderStudents();
}

// Edit a student
function editStudent(index) {
    const s = students[index];
    if (!s) return;
    document.getElementById('id').value = s.id;
    document.getElementById('name').value = s.name;
    document.getElementById('gender').value = s.gender;
    document.getElementById('math').value = s.math;
    document.getElementById('english').value = s.english;
    document.getElementById('literature').value = s.literature;

    editingIndex = index;
}

//delete student
function deleteStudent(index) {
    if (!confirm("Are you sure to delete this student?")) return;
    students.splice(index, 1);
    saveStudents();
    clampPageToList(getActiveList());
    renderStudents()
}

function clearForm() {
    document.getElementById('id').value = '';
    document.getElementById('name').value = '';
    document.getElementById('gender').value = '';
    document.getElementById('math').value = '';
    document.getElementById('english').value = '';
    document.getElementById('literature').value = '';
}

// Search students
function searchStudent() {
    const raw = document.getElementById("searchInput").value || '';
    currentQuery = raw.trim().toLowerCase();

    if (currentQuery) {
        localStorage.setItem('lastSearchQuery', currentQuery);
    } else {
    localStorage.removeItem('lastSearchQuery');
    }

    currentPage = 1;
    renderStudents();
}

// Display students with pagination
function renderStudents() {
    const tableBody = document.getElementById('studentTableBody');
    tableBody.innerHTML = '';

    const list = getActiveList();

    if (list.length === 0) {
        tableBody.innerHTML = `
            <tr><td colspan="8" class="text-center">No records found</td></tr>
        `;
        renderPagination();
        return;
    }

    // Make sure current page number is not bigger than the total pages or <1
    const totalPages = Math.max(1, Math.ceil(list.length / perPage));
    if (currentPage > totalPages) currentPage = totalPages;

    const start = (currentPage - 1) * perPage;
    const paginated = list.slice(start, start + perPage);

    paginated.forEach((s) => {
    const globalIndex = students.indexOf(s);
    const row = `
        <tr>
            <td>${s.id}</td>
            <td>${s.name}</td>
            <td>${s.gender}</td>
            <td>${s.math}</td>
            <td>${s.english}</td>
            <td>${s.literature}</td>
            <td>${s.avg}</td>
            <td>
                <button class="btn btn-success btn-sm" onclick="editStudent(${globalIndex})">Update</button>
                <button class="btn btn-danger btn-sm" onclick="deleteStudent(${globalIndex})">Delete</button>
            </td>
        </tr>
    `;
    tableBody.innerHTML += row;
    });
    renderPagination();
}

//Pagination
function renderPagination() {
    const list = getActiveList();
    const totalPages = Math.ceil(list.length / perPage);
    const container = document.getElementById("paginationContainer");
    container.innerHTML = "";

    // Previous button
    const prev = document.createElement("li");
    prev.className = `page-item ${(currentPage === 1 || totalPages === 0) ? 'disabled' : ''}`;
    prev.innerHTML = `<a class="page-link" href="#" onclick="changePage(-1)">Previous</a>`;
    container.appendChild(prev);

    // Page numbers
    for (let i = 1; i <= totalPages; i++) {
        const li = document.createElement("li");
        li.className = `page-item ${i === currentPage ? 'active' : ''}`;
        li.innerHTML = `<a class="page-link" href="#" onclick="goToPage(${i})">${i}</a>`;
        container.appendChild(li);
    }

    // Next button
    const next = document.createElement("li");
    next.className = `page-item ${(currentPage === totalPages || totalPages === 0) ? 'disabled' : ''}`;
    next.innerHTML = `<a class="page-link" href="#" onclick="changePage(1)">Next</a>`;
    container.appendChild(next);
}

// Handle previous/next clicks
function changePage(step) {
    const list = getActiveList();
    const totalPages = Math.ceil(list.length / perPage);
    const newPage = currentPage + step;
    if (newPage < 1 || newPage > totalPages) return;
    currentPage = newPage;
    renderStudents();
}

//Go directly to a page number
function goToPage(page) {
    const list = getActiveList();
    const totalPages = Math.ceil(list.length / perPage);
    if (page < 1 || page > totalPages) return;
    currentPage = page;
    renderStudents();
}

loadStudents();

// Initial render
renderStudents();
