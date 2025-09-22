// js/storage.js
const STORAGE_USERS = "users_data_v1";
const STORAGE_POSTS = "posts_data_v1";
const STORAGE_CURRENT_USER = "current_user_v1";

function ensureSeed() {
    if (!localStorage.getItem(STORAGE_USERS)) {
        localStorage.setItem(STORAGE_USERS, JSON.stringify(window.seedUsers || []));
    }
    if (!localStorage.getItem(STORAGE_POSTS)) {
        localStorage.setItem(STORAGE_POSTS, JSON.stringify(window.seedPosts || []));
    }
}

function loadUsers() {
    return JSON.parse(localStorage.getItem(STORAGE_USERS) || "[]");
}
function saveUsers(users) {
    localStorage.setItem(STORAGE_USERS, JSON.stringify(users));
}
function loadPosts() {
    return JSON.parse(localStorage.getItem(STORAGE_POSTS) || "[]");
}
function fullName(u) {
    return `${u.first_name} ${u.last_name}`.trim();
}
function fmtDate(iso) {
    try { return new Date(iso).toLocaleString(); } catch { return iso; }
}
function isEmail(s){ return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s); }
function $(id){ return document.getElementById(id); }

// current user (safe store)
function setCurrentUser(user) {
    const safe = user ? { id:user.id, first_name:user.first_name, last_name:user.last_name, email:user.email } : null;
    localStorage.setItem(STORAGE_CURRENT_USER, JSON.stringify(safe));
}
function getCurrentUser() {
    try { return JSON.parse(localStorage.getItem(STORAGE_CURRENT_USER)); } catch { return null; }
}
function clearCurrentUser() {
    localStorage.removeItem(STORAGE_CURRENT_USER);
}
