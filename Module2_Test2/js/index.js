// USERS
const userKeywordEl = $('userKeyword');
const userListEl    = $('userList');
const userMsgEl     = $('userMsg');

// POSTS (table + pagination)
const postTableBody = $('postTableBody');
const postPagination= $('postPagination');
const postMsgEl     = $('postMsg');

// DETAIL
const detailIdEl    = $('detailId');
const detailBoxEl   = $('detailBox');

// POSTS BY EMAIL
const emailForPostsEl  = $('emailForPosts');
const postByUserListEl = $('postByUserList');

// ---------- USERS ----------
function renderUserCards(list){
    if(!list.length){
        userListEl.innerHTML = '';
        userMsgEl.innerHTML = `<div class="alert alert-warning mb-0">Không có user phù hợp.</div>`;
        return;
    }
    userMsgEl.innerHTML = '';
    userListEl.innerHTML = list.map(u=>`
        <div class="col">
            <div class="card h-100 p-3">
                <div class="d-flex align-items-center justify-content-between">
                <span class="badge text-bg-secondary">#${u.id}</span>
                <span class="text-muted">${u.email}</span>
                </div>
                <h3 class="h6 mt-2 mb-0">${fullName(u)}</h3>
            </div>
        </div>
    `).join('');
}

function refreshUsers(){
    const kw = userKeywordEl.value.trim().toLowerCase();
    const users = loadUsers();
    const list = !kw ? users : users.filter(u=>{
        const name = fullName(u).toLowerCase();
        const mail = u.email.toLowerCase();
        return name.includes(kw) || mail.includes(kw);
    });
    renderUserCards(list);
}

// ---------- POSTS TABLE + PAGINATION ----------
let postsCache = loadPosts();
let usersCache = loadUsers();
let currentPage = 1;
const pageSize = 4; // Bootstrap pagination; feel free to change to 5

function postsPageCount(){
    return Math.max(1, Math.ceil(postsCache.length / pageSize));
}
function getPagedPosts(page){
    const start = (page-1)*pageSize;
    return postsCache.slice(start, start + pageSize);
}
function renderPostTable(page=1){
    const byUid = Object.fromEntries(usersCache.map(u=>[u.id,u]));
    const rows = getPagedPosts(page).map(p=>{
        const owner = byUid[p.user_id];
        const ownerName = owner ? fullName(owner) : '(Không rõ)';
        return `
            <tr>
                <td><span class="badge text-bg-dark">${p.id}</span></td>
                <td>${p.title}</td>
                <td>${fmtDate(p.created_at)}</td>
                <td>${ownerName}</td>
                <td><a class="btn btn-sm btn-outline-info" href="${p.image}" target="_blank">Ảnh</a></td>
            </tr>
    `;
    }).join('');
    postTableBody.innerHTML = rows || `<tr><td colspan="5" class="text-center text-muted">Chưa có post.</td></tr>`;
    renderPagination(page);
}
function renderPagination(activePage){
    const total = postsPageCount();
    let html = `
        <li class="page-item ${activePage===1?'disabled':''}">
        <button class="page-link" data-page="${activePage-1}" aria-label="Previous">&laquo;</button>
        </li>
    `;
    for(let i=1;i<=total;i++){
        html += `
        <li class="page-item ${i===activePage?'active':''}">
            <button class="page-link" data-page="${i}">${i}</button>
        </li>
        `;
    }
    html += `
        <li class="page-item ${activePage===total?'disabled':''}">
        <button class="page-link" data-page="${activePage+1}" aria-label="Next">&raquo;</button>
        </li>
    `;
    postPagination.innerHTML = html;

    // Attach handlers
    Array.from(postPagination.querySelectorAll('.page-link')).forEach(btn=>{
        btn.addEventListener('click', ()=>{
        const p = parseInt(btn.dataset.page,10);
        if(!Number.isNaN(p) && p>=1 && p<=total){
            currentPage = p;
            renderPostTable(currentPage);
        }
        });
    });
}

// ---------- POST DETAIL ----------
function renderPostDetail(p){
    if(!p){
        detailBoxEl.innerHTML = `<div class="alert alert-danger mb-0">Không tìm thấy post với ID đã nhập.</div>`;
        return;
    }
    const owner = usersCache.find(u=>u.id===p.user_id);
    detailBoxEl.innerHTML = `
        <div class="card p-3">
        <div class="d-flex flex-wrap gap-2 align-items-center mb-2">
            <span class="badge text-bg-secondary">ID ${p.id}</span>
            <span class="badge text-bg-dark">Tạo: ${fmtDate(p.created_at)}</span>
            <span class="badge text-bg-dark">Sửa: ${fmtDate(p.updated_at)}</span>
        </div>
        <h3 class="h5">${p.title}</h3>
        <p class="mb-2">${p.content}</p>
        <div class="mb-2 text-muted">Người tạo: <strong>${owner?fullName(owner):'(Không rõ)'}</strong></div>
        <div>Ảnh: <a href="${p.image}" target="_blank">${p.image}</a></div>
        </div>
    `;
}
function viewDetail(){
    const raw = detailIdEl.value.trim();
    if(!raw){ detailBoxEl.innerHTML = `<div class="alert alert-danger">Hãy nhập ID post.</div>`; return; }
    const id = parseInt(raw,10);
    if(Number.isNaN(id) || id < 1){ detailBoxEl.innerHTML = `<div class="alert alert-danger">ID không hợp lệ.</div>`; return; }
    const p = postsCache.find(x=>x.id===id);
    renderPostDetail(p);
}

// ---------- POSTS BY EMAIL ----------
function renderPostsByEmail(list, user){
    if(!user){
        postByUserListEl.innerHTML = `<div class="alert alert-danger">Không tìm thấy user với email đã nhập.</div>`;
        return;
    }
    if(!list.length){
        postByUserListEl.innerHTML = `<div class="alert alert-warning">User <b>${fullName(user)}</b> chưa có post.</div>`;
        return;
    }
    postByUserListEl.innerHTML = `
        <div class="text-muted mb-2">Posts của <b>${fullName(user)}</b> (${user.email})</div>
        <div class="list-group">
            ${list.map(p=>`
                <a class="list-group-item list-group-item-action d-flex justify-content-between align-items-center" target="_blank" href="${p.image}">
                    <div>
                        <div class="fw-semibold">${p.title}</div>
                        <small class="text-muted">Tạo: ${fmtDate(p.created_at)} • Sửa: ${fmtDate(p.updated_at)}</small>
                    </div>
                    <span class="badge text-bg-secondary">ID ${p.id}</span>
                </a>
            `).join('')}
        </div>
    `;
}
function findPostsByEmail(){
    const email = emailForPostsEl.value.trim().toLowerCase();
    if(!email){ postByUserListEl.innerHTML = `<div class="alert alert-danger">Hãy nhập email user.</div>`; return; }
    if(!isEmail(email)){ postByUserListEl.innerHTML = `<div class="alert alert-danger">Email không hợp lệ.</div>`; return; }
    const user = usersCache.find(u=>u.email.toLowerCase()===email);
    if(!user){ renderPostsByEmail([], null); return; }
    const list = postsCache.filter(p=>p.user_id===user.id);
    renderPostsByEmail(list, user);
}

// ---------- INIT ----------
document.addEventListener('DOMContentLoaded', ()=>{
  // ensure caches fresh (in case of registration)
    usersCache = loadUsers();
    postsCache = loadPosts();

    refreshUsers();
    renderPostTable(currentPage);

    $('btnSearchUsers').addEventListener('click', refreshUsers);
    userKeywordEl.addEventListener('keydown', e=>{ if(e.key==='Enter') refreshUsers(); });

    $('btnViewDetail').addEventListener('click', viewDetail);
    detailIdEl.addEventListener('keydown', e=>{ if(e.key==='Enter') viewDetail(); });

    $('btnFindPostsByEmail').addEventListener('click', findPostsByEmail);
    emailForPostsEl.addEventListener('keydown', e=>{ if(e.key==='Enter') findPostsByEmail(); });
});
