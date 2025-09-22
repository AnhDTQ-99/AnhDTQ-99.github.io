ensureSeed();

function renderAuthArea() {
    const host = $('authArea');
    if (!host) return;
    host.innerHTML = '';

    const user = getCurrentUser();
    if (user) {
        const chip = document.createElement('span');
        chip.className = 'badge text-bg-primary';
        chip.textContent = `${fullName(user)} (${user.email})`;

        const btn = document.createElement('button');
        btn.className = 'btn btn-outline-light btn-sm ms-2';
        btn.textContent = 'Logout';
        btn.addEventListener('click', () => {
        clearCurrentUser();
        location.href = 'login.html';
        });

        host.appendChild(chip);
        host.appendChild(btn);
    } else {
        const a = document.createElement('a');
        a.href = 'login.html';
        a.className = 'btn btn-primary btn-sm';
        a.textContent = 'Đăng nhập';
        host.appendChild(a);
    }
}

// route guard for main page
function requireLoginOnMain() {
    const onMain = document.body.dataset.page === 'main';
    if (onMain && !getCurrentUser()) {
        // use a return url if you want: login.html?next=index.html
        location.href = 'login.html';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    requireLoginOnMain();
    renderAuthArea();
});
