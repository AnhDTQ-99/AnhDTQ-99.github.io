/**
 * Seed users ban đầu. App sẽ copy sang localStorage lần chạy đầu.
 * Mật khẩu để demo là plain text (thực tế cần mã hoá).
 */
// js/users.js
window.seedUsers = [
    { id: 1, first_name: "Ann",  last_name: "Tran",   email: "ann@example.com",  password: "123456" },
    { id: 2, first_name: "Ken",  last_name: "Sato",   email: "ken@example.com",  password: "abcdef" },
    { id: 3, first_name: "Minh", last_name: "Nguyen", email: "minh@example.com", password: "minhminh" },
    { id: 4, first_name: "Chi",  last_name: "Pham",   email: "chi@example.com",  password: "chi12345" }
];

