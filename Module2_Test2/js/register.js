
const firstEl = $('first');
const lastEl  = $('last');
const emailEl = $('email');
const passEl  = $('pass');

const firstHelp = $('firstHelp');
const lastHelp  = $('lastHelp');
const emailHelp = $('emailHelp');
const passHelp  = $('passHelp');
const alertBox  = $('alertBox');

function showAlert(type, msg){
    alertBox.innerHTML = `<div class="alert alert-${type}" role="alert">${msg}</div>`;
}
function clearFieldErrors(){
    firstHelp.textContent = ''; lastHelp.textContent = '';
    emailHelp.textContent = ''; passHelp.textContent = '';
}

$('btnRegister').addEventListener('click', ()=>{
    clearFieldErrors(); alertBox.innerHTML = '';

    const first = firstEl.value.trim();
    const last  = lastEl.value.trim();
    const email = emailEl.value.trim();
    const pass  = passEl.value.trim();

    if(!first || !last || !email || !pass){
        showAlert('danger', 'Hãy nhập đầy đủ thông tin');
        if(!first) firstHelp.textContent = 'Vui lòng nhập first name';
        if(!last)  lastHelp.textContent  = 'Vui lòng nhập last name';
        if(!email) emailHelp.textContent = 'Vui lòng nhập email';
        if(!pass)  passHelp.textContent  = 'Vui lòng nhập mật khẩu';
        return;
    }

    let invalid = false;
    if(!isEmail(email)){ emailHelp.textContent = 'Email không hợp lệ'; invalid = true; }
    if(pass.length < 6){ passHelp.textContent = 'Mật khẩu cần tối thiểu 6 ký tự'; invalid = true; }
    if(invalid){
        showAlert('danger', 'Hãy nhập đầy đủ thông tin');
        return;
    }

    const users = loadUsers();
    const existed = users.some(u => u.email.toLowerCase() === email.toLowerCase());
    if(existed){
        showAlert('danger', 'Email này đã có tài khoản');
        emailHelp.textContent = 'Email đã tồn tại trong hệ thống';
        return;
    }

    const maxId = users.reduce((m,u)=>Math.max(m,u.id),0);
    const newUser = { id: maxId+1, first_name:first, last_name:last, email, password:pass };
    users.push(newUser);
    saveUsers(users);

    showAlert('success', `Tạo tài khoản thành công. Xin chào ${fullName(newUser)}! Đang chuyển đến đăng nhập...`);
    setTimeout(()=>{ location.href='login.html'; }, 700);
});

// Enter submit
[firstEl,lastEl,emailEl,passEl].forEach(el=>el.addEventListener('keydown', e=>{
    if(e.key==='Enter') $('btnRegister').click();
}));
